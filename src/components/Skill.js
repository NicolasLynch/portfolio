function Skill(props) {

	return (
		<div className='Skill'>
			<div className='skill-container'>
				<img src={props.src} className="skill-icon" alt={`${props.name} logo`}></img>
				<p className='skill-name'>{props.name}</p>
			</div>
		</div>
	)
}

export default Skill;