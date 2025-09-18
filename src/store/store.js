// import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/moviesSlice";
import searchSlice from "./slices/searchSlice";
import movieDetailsSlice from "./slices/movieDetailsSlice";
import creditsSlice from "./slices/creditsSlice";
import trendingSlice from "./slices/trendingSlice";
import favoriteSlice from "./slices/favoriteSlice";
// const initialUserValue = { name: "Abdullah", age: 23, address: "Qena" }





trendingSlice


const store = configureStore(
    {
        reducer:
        {
            trending: trendingSlice.reducer,
            movies: movieSlice.reducer,
            search: searchSlice.reducer,
            movieDetails: movieDetailsSlice.reducer,
            credits: creditsSlice.reducer,
            favorite: favoriteSlice.reducer
        },
    }
)


export default store




// ###################################################################################

// const initialUserValue = { name: "Abdullah", age: 23, address: "Qena" }

// const userSlice = createSlice(
//     {
//         name: "userSlice",
//         initialState: initialUserValue,
//         reducers: {
//             increaseAge(state) {
//                 state.age++;
//             }
//         }
//     }
// )

// export const increaseAge = userSlice.actions.increaseAge


// const store = configureStore(
//     {
//         reducer:
//         {
//             user: userSlice.reducer,

//         },
//     }
// )


// export default store



// #####################################################################################


// const initialUserValue = { name: "Abdullah", age: 23, address: "Qena" }


// const userReducer = (value = initialUserValue, action) => {
//     if (action.type === "increaseAge") {

//         return { ...value, age: value.age + 1 }
//     }
//     if (action.type === "increaseByAmount") {

//         return { ...value, age: value.age + action.payload }
//     }

//     return value
// }

// const store = configureStore(
//     {
//         reducer:
//         {
//             user: userReducer,

//         },
//     }
// )
// export default store
