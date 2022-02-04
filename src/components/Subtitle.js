function Subtitle(props) {

	return (
		<div className='Subtitle'>
			<div className='subtitle-container'>
				<h2 className='subtitle-text'>{props.subtitle}</h2>
				<div className='subtitle-underline'></div>
			</div>
		</div>
	)
}

export default Subtitle;