import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusReducer from "./fetchStatusSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice,
    fetchStatus: fetchStatusReducer, 
  },
});

export default myntraStore;
