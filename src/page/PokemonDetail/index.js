import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {getSingleItem} from "../../store/slices/items";
import {useDispatch, useSelector} from "react-redux";
import classes from './PokemonDetail.module.scss';
import ShowAbilities from "../../components/UI/modals/ShowAbilities";
import {getAbility} from "../../store/slices/modals";
import QuestionMark from "../../components/UI/Svg/QuestionMark";
import Loader from "../../components/UI/Loader";


const PokemonDetail = () => {
    const dispatch = useDispatch();
    const {name, sprites, height, weight, types, abilities, stats, loading} = useSelector(({items: {item}}) => item);
    const {id} = useParams();


    useEffect(() => {
        dispatch(getSingleItem({id, category: 'pokemon'}))
    }, [dispatch, id])


    return (
        <div className={classes.wrapper}>
            {loading ?
                <Loader/>
                :
                <div className={classes.container}>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.pokemonDetails}>

                        <div className={classes.left}>
                            <div className={classes.image}>
                                <img src={sprites?.other?.home?.front_default} alt='pokemon'/>
                            </div>
                        </div>

                        <div className={classes.right}>
                            <div className={classes.description}>

                                <div className={classes.info}>
                                    <div className={classes.infoItem}>
                                        <h3>Name</h3>
                                        <p>{name}</p>
                                    </div>
                                    <div className={classes.infoItem}>
                                        <h3>Height</h3>
                                        <p>{height}'</p>
                                    </div>
                                    <div className={classes.infoItem}>
                                        <h3>Weight</h3>
                                        <p>{weight} lbs</p>
                                    </div>
                                    <div className={classes.infoItem}>
                                        <h3>Name</h3>
                                        <p>{name}</p>
                                    </div>
                                </div>

                                <div className={classes.blocks}>
                                    <h3 className={classes.title}>Type</h3>
                                    <div className={classes.types}>
                                        {types?.map(el => (
                                            <span className={classes.type} key={el.slot}>{el.type.name}</span>
                                        ))}
                                    </div>

                                    <h3 className={classes.title}>Abilities</h3>
                                    <div className={classes.types}>
                                        {abilities?.map((el, i) => (
                                            <div key={i} className={classes.ability}>
                                                <span>{el.ability?.name}</span>
                                                <QuestionMark click={() => dispatch(getAbility(el.ability?.url))}/>
                                            </div>
                                        ))}
                                    </div>


                                    <h3 className={classes.title}>Stats</h3>
                                    <div className={classes.info}>
                                        {stats?.map(el => (
                                            <div className={classes.infoItem} key={el.stat?.name}>
                                                <h3>{el.stat?.name}</h3>
                                                <p>{el.base_stat}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            }
            <ShowAbilities/>
        </div>
    );
};

export default PokemonDetail;