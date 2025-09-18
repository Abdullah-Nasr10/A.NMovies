import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ========== fetch function ==========
const fetchSearchData = async ({ query }) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
        },
    };

    const endpoint = `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US&page=1`;

    try {
        const data = await fetch(endpoint, options);
        const res = await data.json();
        console.log(res.results);
        return res.results;
    } catch (err) {
        return err;
    }
};

// ========== thunk ==========
export const fetchSearchResults = createAsyncThunk(
    "fetchSearchResults",
    fetchSearchData
);

// ========== slice ==========
const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchResults.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSearchResults.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.data = action.payload;
        });
    },
});

export default searchSlice;
