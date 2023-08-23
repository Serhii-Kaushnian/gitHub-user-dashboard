import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
      toast(`There is no such user as ${data}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return rejectWithValue(error.message);
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
