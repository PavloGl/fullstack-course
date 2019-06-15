import React from 'react';
import Part from './Part'
import Stats from './Stats'

const Content = ({ parts }) => {
	const partsList = () => parts.map(part => {
		return <Part key={part.id}
			part={part} />
	})

	return (
		<>
			<ul>
				{partsList()}
			</ul>
			<Stats parts={parts} />
		</>
	)
}

export default Content