import React, {useState} from 'react';
import classes from './Verify.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {verifyCheck} from "../../store/slices/verify";
import {useNavigate} from "react-router";


const Verify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {errorMessage, loading} = useSelector(state => state.verify);
    const [email, setEmail] = useState('');


    const check = (e) => {
        e.preventDefault();
        dispatch(verifyCheck({email, navigate}));
    }


    return (
        <div className={classes.wrapper}>
            <form className={classes.form}>

                <div className={classes.input}>
                    <label htmlFor='login'>Email</label>
                    <input type='email'
                           id='login'
                           placeholder='Ваш Email'
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button onClick={(e) => check(e)}>{loading ? "Wait..." : "Verify"}</button>
                <div className={classes.error}>{errorMessage.length ? errorMessage + ' Email' : ''}</div>
            </form>
        </div>
    );
};

export default Verify;