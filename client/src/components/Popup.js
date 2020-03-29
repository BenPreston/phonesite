import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.name } <span>({ selected.manufacturer })</span></h2>
				<p className="price">Price: {selected.price}</p>
				<div className="phoneDetail">
					<img src={require(`../images/${selected.imageFileName}`)} alt={`${selected.name}`} />
					<p>{selected.description}</p>
					<p><span className="spectitles">Color: </span>{selected.color}</p>
					<p><span className="spectitles">Screen: </span>{selected.screen}</p>
					<p><span className="spectitles">Processor: </span>{selected.processor}</p>
					<p><span className="spectitles">RAM: </span>{selected.ram}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup