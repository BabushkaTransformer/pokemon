import React from 'react';
import classes from './ItemCard.module.scss';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import noImg from '../../assets/420.png';
import {checkCategory} from "../../utils";


const PokemonCard = (data) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const category = useSelector(({items: {currentCategory}}) => currentCategory);
    const {name, sprites, types} = data;


    return (
        <div className={classes.pokemon} onClick={() => checkCategory(data, category, dispatch, navigate)}>

            <div className={classes.image}>
                <img src={sprites?.other?.home?.front_default || sprites?.default || noImg} alt={name}/>
            </div>

            <div className={classes.info}>
                <div className={classes.name}>{name}</div>
                <div className={classes.desc}>
                    <h3>Type</h3>
                    <div>
                        {types?.map((el, i) => <span key={i}>{el?.type?.name}</span>)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PokemonCard;