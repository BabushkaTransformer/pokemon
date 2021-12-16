import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


//state========================================================>>>>>>
const initialState = {
    abilityIsOpen: false,
    loading: false,
    ability: {},
    errorMessage: '',
    item: {},
}


//async actions========================================================>>>>>>
export const getAbility = createAsyncThunk(
    'modals/getAbility',
    async (url, {dispatch}) => {
        dispatch(showAbilityModal());
        try {
            const res = await axios.get(url);
            dispatch(setAbility(res.data));
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    }
)



//slice========================================================>>>>>>
const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        setAbility(state, action) {
            let desc = action.payload.flavor_text_entries[0].flavor_text;
            let effect = action.payload.effect_entries[0].effect;

            state.ability = {
                name: action.payload.name,
                id: action.payload.id,
                effect,
                desc
            }
            state.loading = false;
        },
        setErrorMessage(state, action) {
            state.errorMessage = action.payload;
        },
        showAbilityModal(state) {
            state.loading = true;
            state.abilityIsOpen = true;
        },
        hideAbilityModal(state) {
            state.abilityIsOpen = false;
            state.ability = {};
            state.item = {};
        },
        openModalItem(state, action) {
            state.abilityIsOpen = true;
            state.item = action.payload;
        }
    }
})

export default modals.reducer;
export const {showAbilityModal, hideAbilityModal, setAbility, setErrorMessage, openModalItem} = modals.actions;