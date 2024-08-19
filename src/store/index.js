import { configureStore } from "@reduxjs/toolkit";
import sectionSlice from "./sectionSlice";
import pageSlice from "./pageSlice";


const store = configureStore({
    reducer:{
        section : sectionSlice.reducer,
        page : pageSlice.reducer,
    }
})

export default store