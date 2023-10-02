import { createSlice } from "@reduxjs/toolkit";

const previewerreducer = createSlice({
    name:"previewer",
    initialState:{
        text:''
    },
    reducers:{
        highlight: (state,action) => {
            state.text = action.payload;
        }
    }
});

export const { highlight } = previewerreducer.actions;

export default previewerreducer.reducer;