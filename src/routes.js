import { lazy } from 'react';
const Comics = lazy(() => import('./Components/comics/Comics'));
const Characters = lazy(() => import('./Components/characters/Characters'));
const Stories = lazy(() => import('./Components/stories/Stories'));
const SelectedComic = lazy(() =>
	import('./Components/selectedComic/SelectedComic')
);
const SelectedCharacter = lazy(() =>
	import('./Components/selectedCharacter/SelectedCharacter')
);
const SelectedStorie = lazy(() =>
	import('./Components/selectedStorie/SelectedStorie')
);
const FavoriteItems = lazy(() =>
	import('./Components/favoriteItems/FavoriteItems')
);
const NotFound = lazy(() => import('./Components/notFound/NotFound'));
const SelectedSerie = lazy(() =>
	import('./Components/selectedSerie/SelectedSerie')
);
const PublicRoute = lazy(() => import('./Components/publicRoute/PublicRoute'));

export default [
	{
		key: 1,
		path: '/',
		exact: true,
		type: PublicRoute,
		component: Comics,
	},
	{
		key: 2,
		path: '/comics',
		exact: true,
		type: PublicRoute,
		component: Comics,
	},
	{
		key: 3,
		path: '/characters',
		exact: true,
		type: PublicRoute,
		component: Characters,
	},
	{
		key: 4,
		path: '/stories',
		exact: true,
		type: PublicRoute,
		component: Stories,
	},
	{
		key: 5,
		path: '/comic/:id',
		exact: true,
		type: PublicRoute,
		component: SelectedComic,
	},
	{
		key: 6,
		path: '/character/:id',
		exact: true,
		type: PublicRoute,
		component: SelectedCharacter,
	},
	{
		key: 7,
		path: '/storie/:id',
		exact: true,
		type: PublicRoute,
		component: SelectedStorie,
	},
	{
		key: 8,
		path: '/favorites',
		exact: true,
		type: PublicRoute,
		component: FavoriteItems,
	},
	{
		key: 9,
		path: '/serie/:id',
		exact: true,
		type: PublicRoute,
		component: SelectedSerie,
	},
	{
		key: 10,
		type: PublicRoute,
		component: NotFound,
	},
];
