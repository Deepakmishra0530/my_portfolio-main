import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice({

    name:"section",

    initialState :{
        section:"home"
    } ,

    reducers:{

       setSection(state,action){
        //   console.log(action.payload)
          state.section = action.payload
       }
    }

})

export const sectionActions = sectionSlice.actions

export default sectionSlice