
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTrendingData = async () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
        },
    };
    const endpoint = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;

    const res = await fetch(endpoint, options);
    const data = await res.json();
    return data.results;
};

export const fetchTrending = createAsyncThunk("fetchTrending", fetchTrendingData);

const trendingSlice = createSlice({
    name: "trendingSlice",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTrending.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTrending.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTrending.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default trendingSlice;
