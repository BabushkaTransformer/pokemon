import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//state:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const initialState = {
    allItems: [],
    item: {},
    loading: false,
    currentCategory: 'pokemon',
    errorMessage: '',

    searchItems: [],

    totalCount: 0,
    currentPage: 0,
}


//async actions:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async ({param, category = 'items'}, {dispatch}) => {
        let dataArr = [];
        dispatch(fetchItemsStart());
        dispatch(setCategory(category));

        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/${category}/?limit=20&offset=${param}`);

            dispatch(setTotalCount(res.data.count));

            let promiseArr = res.data.results.map(el => {
                 return axios.get(el.url)
            })

            Promise.all(promiseArr).then(el => {
                el.forEach(response => {
                    dataArr = Object.assign([], dataArr);
                    dataArr.push(response.data);
                });
                dispatch(fetchItemsSuccess(dataArr));
            })
        } catch (e) {
            dispatch(fetchItemsFail(e.message));
        }
    }
)

export const getSingleItem = createAsyncThunk(
    'items/getSingleItem',
    async ({id, category}, {dispatch}) => {
        dispatch(fetchItemsStart());
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/${category}/${id}`);
            dispatch(setSingleItem(res.data));
        } catch (e) {
            dispatch(fetchItemsFail(e.message));
        }
    }
)


//slice:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const items = createSlice({
    name: 'items',
    initialState,
    reducers: {
        fetchItemsStart(state) {
            state.loading = true;
            state.item = {};
        },
        fetchItemsSuccess(state, action) {
            state.loading = false;
            state.allItems = action.payload;
        },
        fetchItemsFail(state, action) {
            state.loading = false;
            state.errorMessage = action.payload;
        },
        setSingleItem(state, action) {
            state.loading = false;
            state.item = action.payload;
        },
        setTotalCount(state, action) {
            state.totalCount = action.payload;
        },
        setCategory(state, action) {
            state.currentCategory = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }
    }
})


export default items.reducer;
export const {
    fetchItemsStart,
    fetchItemsSuccess,
    fetchItemsFail,
    setSingleItem,
    setTotalCount,
    setCategory,
    setCurrentPage
} = items.actions;