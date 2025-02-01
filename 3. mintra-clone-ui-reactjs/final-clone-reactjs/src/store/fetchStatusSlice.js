import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice.reducer;
