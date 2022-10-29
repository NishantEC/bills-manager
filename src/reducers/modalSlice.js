import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  selectedId: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, {payload}) => {state.isOpen = true; state.selectedId = payload},
    closeModal: (state, action) => {state.isOpen= false;state.selectedId = null},
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
