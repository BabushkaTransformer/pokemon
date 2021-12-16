import {openModalItem} from "../store/slices/modals";

export function debounce(func, time = 500) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(func.bind(this, ...args), time);
    }
}

export const checkCategory = (data, category, dispatch, navigate) => {
    switch (category) {
        case 'pokemon':
            navigate(`pokemon/${data.id}`);
            break;
        case 'item':
            navigate(`item/${data.id}`);
            break;
        case 'berry':
            dispatch(openModalItem(data));
            break;
        default:
            navigate('/');
    }
}

export const searchFilter = (allItems, value) => {
    return allItems.filter(v => v.name.toLowerCase().trim().includes(value.toLowerCase().trim()))
}