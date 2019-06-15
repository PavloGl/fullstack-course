import React from 'react';
import Part from './Part'

const Content = ({ parts }) => {
	const partsList = () => parts.map(part => {
		return <Part key={part.id}
			part={part} />
	})

	return (
		<ul>
			{partsList()}
		</ul>
	)
}

export default Content