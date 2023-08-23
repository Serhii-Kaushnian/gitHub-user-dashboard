import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestUserData, requestUserFollowers, requestUserRepos } from "../../API/api";

export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (data, { rejectWithValue }) => {
    try {
      const userData = await requestUserData(data);

      if (!userData) {
      }
      return userData;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getFollowers = createAsyncThunk(
  "userData/fetchUserFollowers",
  async (data, { rejectWithValue }) => {
    try {
      const followers = await requestUserFollowers(data);
      return followers;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getRepos = createAsyncThunk(
  "userData/fetchUserRepos",
  async (data, { rejectWithValue }) => {
    try {
      const repos = await requestUserRepos(data);
      return repos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const setError = createAsyncThunk("userData/setError", async (isError, { rejectWithValue }) => {
  try {
  
    return isError;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
