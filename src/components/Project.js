function Project(props) {
	// ./assets/images/${props.projectName}-desktop.jpg


	return (
		<div className='Project'>
			<div className='project-info'>
				<p className='project-title'>{props.projectName}</p>
				<div className='project-links'>
					<div className='link-container'>
						<a  href={props.liveLink} className='project-link' target="_blank" rel="noopener noreferrer">Live site</a>
						<div className='link-underline'></div>
					</div>
					<div className='link-container'>
						<a  href={props.repoLink} className='project-link' target="_blank" rel="noopener noreferrer">Repo</a>
						<div className='link-underline'></div>
					</div>
					<div className='link-container'>
						<a  href={props.referenceLink} className='project-link' target="_blank" rel="noopener noreferrer">Reference</a>
						<div className='link-underline'></div>
					</div>
				</div>
			</div>
			<img className="project-image"
				srcSet={`
					${props.srcDesktop},
					${props.srcMovil} 3x`} 
				alt={props.projectName}>
			</img>
		</div>
	)
}

export default Project;
