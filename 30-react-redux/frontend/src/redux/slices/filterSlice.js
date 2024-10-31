import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   title: "",
};

const filterSlice = createSlice({
   name: "filter",
   reducers: {
      setTitleFilter: (state, action) => {
         return { ...state, title: action.payload };
      },
      resetFilters: () => {
         return initialState;
      },
   },
   initialState,
});

export const { setTitleFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;