import HomePage from "../page/HomePage";
import PokemonDetail from "../page/PokemonDetail";
import ItemDetail from "../page/ItemDetail";
import Verify from "../page/Verify";

export const HOME_ROUTE = "/";
export const POKEMON_DETAIL_ROUTE = '/pokemon/:id';
export const ITEM_DETAIL_ROUTE = '/item/:id';
export const VERIFY_ROUTE = '/verify'


export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <HomePage/>,
        isPrivate: true
    },
    {
        path: POKEMON_DETAIL_ROUTE,
        Component: <PokemonDetail/>,
        isPrivate: true
    },
    {
        path: ITEM_DETAIL_ROUTE,
        Component: <ItemDetail/>,
        isPrivate: true
    },
    {
        path: VERIFY_ROUTE,
        Component: <Verify/>,
    },
];
