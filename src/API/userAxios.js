import axios from "axios";

export const SignUpAPI = axios.create({
  baseURL: "https://react-http-training-199ed-default-rtdb.firebaseio.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const userSignUpPostAxios = async (user) => {
  try {
    await SignUpAPI.post("/users.json", JSON.stringify(user));
    console.log("통신 성공!", user);
  } catch (e) {
    console.log(e);
  }
};

export const userGetAxios = async (userId, userPW) => {
  try {
    const response = await SignUpAPI.get("/users.json", {
      params: {
        email: userId,
        passward: userPW,
      },
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const RoomAPI = axios.create({
  baseURL: "http://192.168.64.9:8080/rooms",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRoomAxios = async () => {
  let data;
  try {
    const response = await RoomAPI.get();
    data = await response;
  } catch (e) {
    console.log(e);
  }

  return data;
};
