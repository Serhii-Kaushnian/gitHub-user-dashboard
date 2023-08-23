import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData, getFollowers, getRepos } from "./userDataOperations";

const initialState = {
  user: null,
  userFollowers: null,
  userRepos: null,
  isLoading: false,
  isLoadingFollowers: false,
  isLoadingRepos: false,
  error: null,
};

export const fetchUserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //==========GET /user ====================
    //Працює
    // OK
    builder
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
      });
    //==========GET /user ====================

    //==========GET /userFollowers ====================
    //Працює
    // OK
    builder
      .addCase(getFollowers.pending, (state, action) => {
        state.isLoadingFollowers = true;
      })
      .addCase(getFollowers.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingFollowers = false;
        state.userFollowers = payload;
      })
      .addCase(getFollowers.rejected, (state, { payload }) => {
        state.isLoadingFollowers = false;
        state.error = payload;
      });
    //==========GET /userFollowers ====================

    // ============Update pet==================
    builder
      .addCase(getRepos.pending, (state, action) => {
        state.isLoadingRepos = true;
      })
      .addCase(getRepos.fulfilled, (state, { payload }) => {
        if (!payload) {
          return state;
        }
        state.isLoadingRepos = false;
        state.userRepos = payload;
      })
      .addCase(getRepos.rejected, (state, { payload }) => {
        state.isLoadingRepos = false;
        state.error = payload;
      });
    // ============Update pet==================
  },
});
