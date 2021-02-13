import React from 'react';
import { Image } from 'antd';
import { GalleryContainer } from './Style';

const Gallery = ({ images }) => {
	return (
		<GalleryContainer>
			{images.map((value, index) => (
				<Image
					key={index}
					width={200}
					src={`${value.path}.${value.extension}`}
				/>
			))}
		</GalleryContainer>
	);
};

export default Gallery;
