import Skill from "./Skill";

function SkillsList(props) {

	return (
		<div className='Skills-list'>
			<div className='skills-line'>
				<Skill name={'react'} src='./assets/icons/react-logo.png'/>
				<Skill name={'javascript'} src='./assets/icons/javascript-logo.png'/>
				<Skill name={'git'} src='./assets/icons/git-logo.png'/>
			</div>
			<div className='skills-line'>
				<Skill name={'html'} src='./assets/icons/html-logo.png'/>
				<Skill name={'css'} src='./assets/icons/css-logo.png'/>
			</div>
		</div>
	)
}

export default SkillsList;