import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritList: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const mov = action.payload;
            const exist = state.favoritList.some((item) => item.movId === mov.movId);
            if (exist) {
                state.favoritList = state.favoritList.filter(
                    (item) => item.movId !== mov.movId
                );
            } else {
                state.favoritList.push(mov);
            }
        },
        removeFavorite: (state, action) => {
            state.favoritList = state.favoritList.filter(
                (item) => item.movId !== action.payload
            );
        },
    },
});

export const { toggleFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice;
