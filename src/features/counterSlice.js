import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    name:"Evolution",
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        showName:(fullName) => {
            fullName.name = "Najot"
        }
    }
})

export const {increment , decrement, showName} = counterSlice.actions;

export default counterSlice.reducer;