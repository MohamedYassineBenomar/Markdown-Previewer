import { configureStore } from "@reduxjs/toolkit";
import previewerreducer from "../reducers/previewerreducer"

const store = configureStore({
    reducer:{
        rootreducer:previewerreducer
    }
})

export default store;