import React, {useEffect} from 'react';
import classes from './PokemonsList.module.scss';
import PokemonCard from "../ItemCard";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "../Pagination";
import {fetchItems} from "../../store/slices/items";
import Loader from "../UI/Loader";


const PokemonList = () => {
    const dispatch = useDispatch();
    const {allItems, totalCount, currentCategory, currentPage, loading} = useSelector((state => state.items));
    const totalPages = Math.floor(totalCount / 20);

    useEffect(() => {
        dispatch(fetchItems({param: currentPage * 20, category: currentCategory}));
    }, [dispatch, currentPage, currentCategory])


    return (
        <div className={classes.pokemonList}>

            {loading ?
                <div className={classes.loader}><Loader/></div>
                :
                <React.Fragment>
                    {allItems.map((el, i) => <PokemonCard key={i} {...el}/>)}
                </React.Fragment>
            }

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}/>
        </div>
    );
};

export default PokemonList;