import axios from "axios";

// const BASE_URL = "https://api.github.com/users/";

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

const instance = axios.create({
  // .. where we make our configurations
  baseURL: "https://api.github.com/users/",
});

//========================== USER  =============================

export async function requestUserData(userName) {
  try {
    const { data } = await instance.get(userName);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(userData) {
  const updateData = {
    [userData.name]: userData.value,
  };
  try {
  } catch (error) {
    throw error;
  }
}

export async function updatePetsData(petData) {
  try {
  } catch (error) {
    throw error;
  }
}
