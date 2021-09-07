import axios from "axios";

export const API = axios.create({
  // baseURL: "https://react-http-training-199ed-default-rtdb.firebaseio.com",
  baseURL: "http://192.168.63.160:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const userSignUpPostAxios = async (user) => {
  try {
    await API.post("/signUp", JSON.stringify(user));
    console.log("통신 성공!", user);
  } catch (e) {
    console.log(e);
  }
};

export const signInPostAxios = async (userId, userPW) => {
  try {
    const response = await API.post("/signIn", {
      email: userId,
      password: userPW,
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};
