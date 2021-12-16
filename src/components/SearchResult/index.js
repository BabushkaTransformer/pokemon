import React from 'react';
import classes from './SearchResult.module.scss';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import noImg from "../../assets/420.png";
import {checkCategory} from "../../utils";


const SearchResult = ({searchResult, setOpen}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const category = useSelector(({items: {currentCategory}}) => currentCategory);


    const justClick = (el) => {
        setOpen(false);
        checkCategory(el, category, dispatch, navigate);
    }


    return (
        <div className={classes.searchSuggestion}>
            <div className={classes.inner}>

                {
                    searchResult.length ?
                        <React.Fragment>
                            {searchResult.map(el => (
                                <div key={el.id} className={classes.suggestion} onMouseDown={() => justClick(el)}>
                                    <img src={el.sprites?.front_default || el.sprites?.default || noImg} alt={el.name}/>
                                    {el.name}
                                </div>
                            ))}
                        </React.Fragment>
                        :
                        <div>Не найдено</div>
                }

            </div>
        </div>
    );
};

export default SearchResult;