import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../state/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
