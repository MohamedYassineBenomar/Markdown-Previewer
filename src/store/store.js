import { configureStore } from "@reduxjs/toolkit";
import { previewerreducer } from "./reducers/reducer1"

const store = configureStore({
    reducer:{
        rootreducer:previewerreducer
    }
})

export default store;