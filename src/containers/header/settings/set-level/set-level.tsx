import { SetLevelContainer } from "./_set-level.styled"

export const SetLevel = () => {
	return (
		<SetLevelContainer>
			<p>Niveles</p>
			<div className="levels">
				<div className="level active">
					<div>Facil - 10x10</div>
					<div>🦠10</div>
				</div>
				<div className="level">
					<div>Normal - 10x10</div>
					<div>🦠10</div>
				</div>
				<div className="level">
					<div>Hard - 10x10</div>
					<div>🦠10</div>
				</div>
			</div>
		</SetLevelContainer>
	)
}
