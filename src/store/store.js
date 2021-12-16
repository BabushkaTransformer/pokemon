import {configureStore} from "@reduxjs/toolkit";
import items from './slices/items';
import modals from "./slices/modals";
import verify  from "./slices/verify";


export const store = configureStore({
  reducer: {
      items,
      modals,
      verify
  }
})