import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({

    name:"page",

    initialState :{
        page:"home"
    } ,

    reducers:{

       setPage(state,action){
          console.log(action.payload)
          state.page = action.payload
       }
    }

})

export const pageActions = pageSlice.actions

export default pageSlice