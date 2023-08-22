import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestUserData, updateUserData } from "../../API/api";

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
export const updateUser = createAsyncThunk(
  "userData/updateUserData",
  async (data, { rejectWithValue }) => {
    try {
      const updatedUserData = await updateUserData(data);
      return updatedUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateUserAvatar = createAsyncThunk(
  "userData/updateUserAvatar",
  async (data, { rejectWithValue }) => {
    try {
      const updatedUserData = await updateUserData(data);
      return updatedUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
