import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestUserData, requestUserFollowers } from "../../API/api";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (data, { rejectWithValue }) => {
    try {
      const userData = await requestUserData(data);
      if (!userData) {
      }
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getFollowers = createAsyncThunk(
  "userData/updateUserData",
  async (data, { rejectWithValue }) => {
    try {
      const followers = await requestUserFollowers(data);
      return followers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
