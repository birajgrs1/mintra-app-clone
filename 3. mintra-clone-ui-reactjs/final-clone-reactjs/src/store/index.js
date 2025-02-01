import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusReducer from "./fetchStatusSlice";
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice,
    fetchStatus: fetchStatusReducer, 
    bag: bagSlice,
  },
});

export default myntraStore;
