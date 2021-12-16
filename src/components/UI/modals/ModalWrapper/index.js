import React from 'react';
import classes from './ModalWrapper.module.scss';
import {hideAbilityModal} from "../../../../store/slices/modals";
import {useDispatch, useSelector} from "react-redux";
import cs from 'classnames';
import CloseIcon from "../../Svg/CloseIcon";

const ModalWrapper = ({children}) => {
    const dispatch = useDispatch();
    const abilityIsOpen = useSelector(({modals: {abilityIsOpen}}) => abilityIsOpen);

    let backdrop = cs(classes.backdrop, {[classes.active]: abilityIsOpen});
    let modal = cs(classes.modal, {[classes.active]: abilityIsOpen});


    return (
        <div className={backdrop} onClick={() => dispatch(hideAbilityModal())}>
            <div className={modal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.close} onClick={() => dispatch(hideAbilityModal())}>
                    <CloseIcon/>
                </div>

                <div className={classes.info}>
                    {children}
                </div>

            </div>
        </div>
    );
};

export default ModalWrapper;