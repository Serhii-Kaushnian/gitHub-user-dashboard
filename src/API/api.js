import axios from "axios";

const BASE_URL = "https://pet-support-project.onrender.com/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

//========================== USER  =============================

export async function requestUserData(token) {
  try {
    const { data } = await instance.get("/user");
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
    const { data } = await instance.patch("/user", updateData, {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updatePetsData(petData) {
  try {
    const { data } = await instance.patch(`/user/pets/${petData.petId}`, petData.formData, {
      headers: {
        "Content-Type": `multipart/form-data;`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
