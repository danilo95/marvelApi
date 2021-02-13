import React from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { CharacterWrapperGallery, CardContainer } from './Style';
const { Meta } = Card;

const CharactersGallery = ({ gallery, loading, handleRedirect }) => {
	return (
		<CharacterWrapperGallery>
			<Skeleton loading={loading} />
			{gallery.map((value) => (
				<CardContainer
					onClick={() => {
						handleRedirect(`/character/${value.id}`);
					}}
				>
					<Card
						key={value.id}
						cover={
							<img
								alt="super-hero"
								src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`}
								height={300}
							/>
						}
						actions={[
							<span
								onClick={() => {
									handleRedirect(`/character/${value.id}`);
								}}
							>
								Show
							</span>,
						]}
					>
						<Meta
							avatar={
								<Avatar
									src={`${value?.thumbnail?.path}.${value?.thumbnail?.extension}`}
								/>
							}
							title={value.name}
						/>
					</Card>
				</CardContainer>
			))}
		</CharacterWrapperGallery>
	);
};

export default CharactersGallery;
