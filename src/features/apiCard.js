import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice.js";

export const fetchUsers = createAsyncThunk(
    "products/fetchUsers",
    async () => {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json()
        return data
    }
)
const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers:{},
    extraReducers:(builder) => {
        //Biz fulfilled ni tutyapmiz — API muvaffaqiyatli tugaganda
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            //action.payload — bu API’dan kelgan data
            state.products = action.payload;
            //state.products = action.payload — datani store ichida saqlash
        })
    }
})

export default productsSlice.reducer;