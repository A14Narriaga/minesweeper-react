FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS base
ENV DIR /app
WORKDIR $DIR

# Development Mode
FROM base AS development
RUN echo "Starting dev mode"
EXPOSE ${PORT}
COPY package.json package.json
RUN yarn install
CMD [ "yarn", "dev" ]

# Install development dependencies
FROM base AS dev-deps
RUN echo "Installing dev dependencies"
COPY package.json package.json
RUN yarn install --frozen-lockfile

# Build the app
FROM base AS builder
RUN echo "Type check, test and build app"
COPY --from=dev-deps $DIR/node_modules ./node_modules
COPY . .
RUN yarn type-check && yarn test && yarn build

# Install production dependencies
FROM base AS prod-deps
RUN echo "Installing prod dependencies"
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile

# Production app
FROM base AS production
RUN echo "Starting prod mode"
EXPOSE ${PORT}
COPY --from=prod-deps $DIR/node_modules ./node_modules
COPY --from=builder $DIR/dist ./dist
CMD [ "node", "dist/index.html" ]


