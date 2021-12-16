import React from 'react';
import classes from './ShowAbilities.module.scss';
import {useSelector} from "react-redux";
import ModalWrapper from "../ModalWrapper";
import Loader from "../../Loader";


const ShowAbilities = () => {
    const {ability, loading} = useSelector(state => state.modals);
    const {name, desc, effect} = ability;


    return (
        <ModalWrapper>
            {loading ?
                <div className={classes.loader}><Loader/></div> :

                <div className={classes.description}>
                    <h2>{name}</h2>
                    <div className={classes.text}>
                        <h3>Description</h3>
                        {desc}
                    </div>
                    <div className={classes.text}>
                        <h3>Effects</h3>
                        {effect}
                    </div>
                </div>
            }
        </ModalWrapper>
    );
};

export default ShowAbilities;