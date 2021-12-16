import React from 'react';
import classes from './Sidebar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {fetchItems, setCurrentPage} from "../../store/slices/items";


const Sidebar = () => {
    const dispatch = useDispatch();
    const current = useSelector(({items: {currentCategory}}) => currentCategory);

    const categories = [
        {
            id: 1,
            category: 'pokemon'
        },
        {
            id: 2,
            category: 'berry'
        },
        {
            id: 3,
            category: 'item'
        },
    ]

    const changeCategory = (category) => {
        dispatch(fetchItems({param: 0, category}));
        dispatch(setCurrentPage(0));
    }


    return (
        <div className={classes.sidebar}>
            <div className={classes.categories}>

                {categories.map(el => (
                    <div className={el.category === current ? classes.categoryActive : classes.category}
                         onClick={() => changeCategory(el.category)}
                         key={el.id}>
                        {el.category}</div>
                ))}

            </div>
        </div>
    );
};

export default Sidebar;