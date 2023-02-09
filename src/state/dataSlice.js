import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectPlanData: {},
  onlineService: {},
  largerStorage: {},
  customProfile: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, { payload }) => {
      state.selectPlanData = payload;
    },
    addOnline: (state, { payload }) => {
      state.onlineService = payload;
    },
    addLarger: (state, { payload }) => {
      state.largerStorage = payload;
    },
    addCustom: (state, { payload }) => {
      state.customProfile = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData, addOnline, addLarger, addCustom } =
  dataSlice.actions;

export default dataSlice.reducer;
