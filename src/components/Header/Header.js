import React, {useState} from 'react';
import {useSelector} from "react-redux";
import SearchResult from "../SearchResult";
import {debounce, searchFilter} from "../../utils";
import classes from './Header.module.scss';


const Header = () => {
    const allItems = useSelector(({items: {allItems}}) => allItems);
    const user = useSelector(({verify: {user}}) => user);
    const [inputValue, setInputValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [open, setOpen] = useState(false);


    const search = (value) => {
        setOpen(!!value.length)
        setSearchResult(searchFilter(allItems, value))
    }

    const processChange = debounce(() => search(inputValue));


    return (
        <div className={classes.header}>

            <div className={classes.user}>
                Привет, {user}!
            </div>

            <div className={classes.input}>
                <input type='text'
                       placeholder='Поиск'
                       value={inputValue}
                       onKeyDown={processChange}
                       onBlur={() => setOpen(false)}
                       onChange={(e) => setInputValue(e.target.value)}/>

                {open && <SearchResult searchResult={searchResult} setOpen={setOpen}/>}
            </div>

        </div>
    );
};

export default Header;