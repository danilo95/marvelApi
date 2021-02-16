import Comics from './Components/comics/Comics';
import Characters from './Components/characters/Characters';
import Stories from './Components/stories/Stories';
import SelectedComic from './Components/selectedComic/SelectedComic';
import SelectedCharacter from './Components/selectedCharacter/SelectedCharacter';
import SelectedStorie from './Components/selectedStorie/SelectedStorie';
import FavoriteItems from './Components/favoriteItems/FavoriteItems';
import NotFound from './Components/notFound/NotFound';
import SelectedSerie from './Components/selectedSerie/SelectedSerie';
import PublicRoute from './Components/publicRoute/PublicRoute';

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
