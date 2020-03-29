import React from 'react'

function Phone({phone, openPopup}) {
	
	return (
		<div className="result" onClick={() => openPopup(phone)}>
			<h3 className="title">{phone.name}</h3>
			<img src={require(`../images/${phone.imageFileName}`)} alt={`${phone.name}`}></img>	
		</div>
	)
}

export default Phone