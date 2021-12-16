import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

//initialState:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const initialState = {
    user: '',
    isVerified: false,
    errorMessage: '',
    loading: false
}


//async functions:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export const verifyCheck = createAsyncThunk(
    'verify/verifyCheck',
    async ({email, navigate}, {dispatch}) => {
        dispatch(verifyPending());
        try {
            const res = await axios(`https://api.kickbox.com/v2/verify?email=${email}&apikey=${api_key}`);

            if (res.data.result === 'deliverable') {
                dispatch(verifySuccess(res.data));
                window.localStorage.setItem('user', res.data.user);
                navigate('/');
            } else {
                dispatch(verifyFailed(res.data.result));
            }

        } catch (e) {
            dispatch(verifyFailed(e.message));
        }
    }
)

//slice:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const verify = createSlice({
        name: 'auth',
        initialState,

        reducers: {
            verifyPending(state) {
                state.loading = true;
            },
            verifySuccess(state, action) {
                state.loading = false;
                state.errorMessage = '';
                state.isVerified = true;
                state.user = action.payload.user;
            },
            verifyFailed(state, action) {
                state.loading = false;
                state.isVerified = false;
                state.errorMessage = action.payload;
            },
            checkUser(state) {
                const userName = window.localStorage.getItem('user');

                if(userName) {
                    state.user = userName;
                    state.isVerified = true;
                }
            }
        },
    }
)

export default verify.reducer;
export const {verifyPending, verifySuccess, verifyFailed, checkUser} = verify.actions;

