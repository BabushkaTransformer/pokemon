import React, {useEffect} from 'react';
import classes from './ItemDetail.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getSingleItem} from "../../store/slices/items";


const ItemDetail = () => {
    const dispatch = useDispatch();
    const item = useSelector(({items: {item}}) => item);
    const {id} = useParams();
    const {cost, name, fling_power, category, attributes, effect_entries, sprites} = item;


    useEffect(() => {
        dispatch(getSingleItem({id, category: 'item'}))
    }, [dispatch, id])


    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.name}>{name}</div>
                <div className={classes.pokemonDetails}>

                    <div className={classes.right}>
                        <div className={classes.description}>

                            <div className={classes.info}>
                                <div className={classes.infoItem}>
                                    <h3>Name</h3>
                                    <p>{name}</p>
                                </div>
                                <div className={classes.infoItem}>
                                    <h3>Cost</h3>
                                    <p>{cost}'</p>
                                </div>
                                <div className={classes.infoItem}>
                                    <h3>Fling Power</h3>
                                    <p>{fling_power || 'none'}</p>
                                </div>
                                <div className={classes.infoItem}>
                                    <h3>Category</h3>
                                    <p>{category?.name}</p>
                                </div>
                            </div>

                            <div className={classes.blocks}>
                                <h3 className={classes.title}>Attributes</h3>
                                <div className={classes.types}>
                                    {attributes?.map(el => (
                                        <span className={classes.type} key={el.name}>{el.name}</span>
                                    ))}
                                </div>
                                <h3 className={classes.title}>Description</h3>
                                <div className={classes.text}>
                                    {effect_entries ? effect_entries[0].effect : ''}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.left}>
                        <div className={classes.image}>
                            <img src={sprites?.default} alt='item'/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ItemDetail;