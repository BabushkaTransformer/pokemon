import React from 'react';
import classes from './ShowItem.module.scss';
import ModalWrapper from "../ModalWrapper";
import {useSelector} from "react-redux";


const ShowItem = () => {
    const item = useSelector(({modals: {item}}) => item);
    const {growth_time, natural_gift_power, max_harvest, size, soil_dryness, smoothness, name} = item;


    return (
        <ModalWrapper>
            <div className={classes.title}>{name}</div>
            <div className={classes.table}>
                <div className={classes.row}>
                    <span>Growth Time</span>
                    <span>{growth_time}</span>
                </div>
                <div className={classes.row}>
                    <span>Natural Gift Power</span>
                    <span>{natural_gift_power}</span>
                </div>
                <div className={classes.row}>
                    <span>Max Harvest</span>
                    <span>{max_harvest}</span>
                </div>
                <div className={classes.row}>
                    <span>Size</span>
                    <span>{size}</span>
                </div>
                <div className={classes.row}>
                    <span>Soil Dryness</span>
                    <span>{soil_dryness}</span>
                </div>
                <div className={classes.row}>
                    <span>Smoothness</span>
                    <span>{smoothness}</span>
                </div>
            </div>
        </ModalWrapper>
    );
};

export default ShowItem;