import React from 'react';
import Sidebar from "../../components/Sidebar";
import PokemonList from "../../components/ItemsList";
import classes from './HomePage.module.scss';
import ShowItem from "../../components/UI/modals/ShowItem";
import Header from "../../components/Header/Header";


const HomePage = () => {

    return (
        <React.Fragment>
            <Header/>
            <div className={classes.container}>
                <Sidebar/>
                <PokemonList/>
                <ShowItem/>
            </div>
        </React.Fragment>
    );
};

export default HomePage;