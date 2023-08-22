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

export async function requestUserFollowers(followersLink) {
  try {
    const { data } = await instance.get(followersLink);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function requestUserRepos(reposLink) {
  try {
    const { data } = await instance.get(reposLink);

    return data;
  } catch (error) {
    throw error;
  }
}
