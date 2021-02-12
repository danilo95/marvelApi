import React from 'react';
import { Image } from 'antd';

const Gallery = ({ images }) => {
	return (
		<div>
			{images.map((value, index) => (
				<Image
					key={index}
					width={200}
					src={`${value.path}.${value.extension}`}
				/>
			))}
		</div>
	);
};

export default Gallery;
