import classes from './Pagination.module.scss';
import {useDispatch} from "react-redux";
import {setCurrentPage} from "../../store/slices/items";


const Pagination = ({currentPage, totalPages}) => {
    const dispatch = useDispatch();

    const changePageHandler = (minus = false) => {
        if (minus && currentPage >= 1) {
            dispatch(setCurrentPage(currentPage - 1));
        } else if (!minus && currentPage < totalPages - 1) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };


    return (
        <div className={classes.wrapper}>
            <span>Страница</span>
            <span className={classes.pageIndex}>{currentPage + 1}</span>
            <span>из {totalPages}</span>
            <button onClick={() => changePageHandler(true)}>
                {">"}
            </button>
            <button onClick={() => changePageHandler(false)}>
                {'>'}
            </button>
        </div>
    );
}

export default Pagination;
