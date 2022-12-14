import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import UserSlice from "./UserSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        todo: CartSlice.reducer
    }
})

export default store;