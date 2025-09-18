import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



const fetchDetailsData = async ({ type, id }) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
        },
    };
    const endpoint = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;

    try {
        const data = await fetch(endpoint, options);
        const res = await data.json();


        return res;
    } catch (err) {
        return err
    }
}



export const fetchMovieDetails = createAsyncThunk('fetchMovieDetails', fetchDetailsData)




const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        movie: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovieDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.movie = action.payload;
            })
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default movieDetailsSlice;



