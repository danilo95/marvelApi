import React from 'react';
import { Skeleton, Card, Avatar } from 'antd';
import { CharacterWrapperGallery, CardContainer, EmptyMessage } from './Style';
const { Meta } = Card;

const CharactersGallery = ({ gallery, loading, handleRedirect }) => {
	return (
		<CharacterWrapperGallery>
			{gallery.length === 0 && (
				<EmptyMessage>No Characters found..</EmptyMessage>
			)}
			<Skeleton loading={loading} />
			{gallery.map((value) => (
				<CardContainer
					onClick={() => {
						handleRedirect(`/character/${value.id}`);
					}}
					key={value.id}
				>
					<Card
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
