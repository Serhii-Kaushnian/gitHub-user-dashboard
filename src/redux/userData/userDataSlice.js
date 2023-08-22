import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, updateUser } from "./userDataOperations";

const initialState = {
  user: {
    name: null,
    email: null,
    birthdate: null,
    phone: null,
    city: null,
    picture: null,
    pets: [],
  },
  isLoading: false,
  isLoadingUpdate: false,
  isUploadingPet: false,
  isUpdatingPet: false,
  isDeletingPet: false,
  error: null,
};

export const fetchUserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //==========GET /user ====================
      //Працює
      // OK
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //==========GET /user ====================

      //==========PATCH /user ====================
      //Працює
      // OK
      .addCase(updateUser.pending, (state, action) => {
        state.isLoadingUpdate = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingUpdate = false;
        state.user.user = payload;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoadingUpdate = false;
        state.error = payload;
      });
    //==========PATCH /user ====================
  },
});
