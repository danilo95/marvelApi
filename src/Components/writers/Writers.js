import React from 'react';

const Writers = ({ writers }) => {
	return (
		<ul>
			{writers.map((value, index) => (
				<li key={index}>
					{value.name} <b>{value.role}</b>
				</li>
			))}
		</ul>
	);
};

export default Writers;
