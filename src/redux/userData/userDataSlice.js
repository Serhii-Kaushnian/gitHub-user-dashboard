import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, getFollowers } from "./userDataOperations";

const initialState = {
  user: null,
  userFollowers: null,
  isLoading: false,
  isLoadingUpdate: false,
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
      .addCase(getFollowers.pending, (state, action) => {
        state.isLoadingUpdate = true;
      })
      .addCase(getFollowers.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingUpdate = false;
        state.userFollowers = payload;
      })
      .addCase(getFollowers.rejected, (state, { payload }) => {
        state.isLoadingUpdate = false;
        state.error = payload;
      });
    //==========PATCH /user ====================
  },
});
