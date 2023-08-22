import { createAsyncThunk } from "@reduxjs/toolkit";

import { requestUserData, updatePetsData, updateUserData } from "../../API/api";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (_, { rejectWithValue, getState }) => {
    const { auth } = getState();
    try {
      const userData = await requestUserData(auth.token);
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
