import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// var total;

const fetchData = async (page) => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
        },
    };
    const endpoint = `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`;

    try {
        const data = await fetch(endpoint, options);
        const res = await data.json();
        console.log(res.results);
        // total = res.total_pages;
        return { results: res.results, total: res.total_pages };
    } catch (err) {
        return err
    }
}


export const fetchMoviesData = createAsyncThunk('fetchMoviesData', fetchData)




const movieSlice = createSlice(
    {
        name: "movieSlice",
        initialState: {
            data: [],
            isLoading: true,
            error: null,
            totalPage: 0
        },

        extraReducers: (builder) => {
            builder.addCase(fetchMoviesData.pending, (state) => {
                state.isLoading = true;
            })
            builder.addCase(fetchMoviesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error
            })
            builder.addCase(fetchMoviesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                // state.data = action.payload;
                state.data = action.payload.results;
                state.totalPage = action.payload.total;
            })

        }
    }
)

// export const { updateMovies, setError } = movieSlice.actions

export default movieSlice;


// const fetchData = () => {
//     const options = {
//         method: "GET",
//         headers: {
//             accept: "application/json",
//             Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmMzOTI5ZWE0NjQ3OGEwYzZhMWY0N2I1MjFkZDVkOCIsIm5iZiI6MTc1NzUwMDc4OS41OTIsInN1YiI6IjY4YzE1NTc1ZTNkOWY2NDY5MDk4ZDEyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mWiV9T6IU963bzqdi1Dq5uJ_tElxLhCNU60mh3DRwTw",
//         },
//     };
//     const endpoint = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;

//     return (fetch(endpoint, options)
//         .then((res) => res.json())
//         .then((res) => res.results))

// }




// ===============================================================
// import { createSlice } from "@reduxjs/toolkit"


// const movieSlice = createSlice(
//     {
//         name: "movieSlice",
//         initialState: {
//             data: [],
//             isLoading: true,
//             error: null
//         },
//         reducers: {
//             updateMovies(state, action) {
//                 state.data = action.payload;
//                 state.isLoading = false;
//             },
//             setError(state, action) {
//                 state.error = action.payload;
//                 state.isLoading = false;
//                 state.data = [];
//             }
//         }

//     }
// )

// export const { updateMovies, setError } = movieSlice.actions


// export default movieSlice;

