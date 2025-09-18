import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const fetchCreditsData = async ({ type, id }) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
        },
    };
    const endpoint = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`;

    try {
        const data = await fetch(endpoint, options);
        const res = await data.json();


        return res.cast;
    } catch (err) {
        return err
    }
}


export const fetchCredits = createAsyncThunk('fetchCredits', fetchCreditsData)







const creditsSlice = createSlice({
    name: "credits",
    initialState: {
        cast: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCredits.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCredits.fulfilled, (state, action) => {
                state.loading = false;
                state.cast = action.payload;
            })
            .addCase(fetchCredits.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default creditsSlice;
