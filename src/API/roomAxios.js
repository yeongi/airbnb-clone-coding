import axios from "axios";

export const RoomAPI = axios.create({
  baseURL: "http://192.168.64.1:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRoomAxios = async (page) => {
  let data;
  try {
    const response = await RoomAPI.get(`/rooms/page/${page}`);
    data = response;
  } catch (e) {
    console.log(e);
  }

  return data;
};

export const hostPostAxios = async (data) => {
  try {
    const response = await RoomAPI.post("/rooms/", JSON.stringify(data));
    console.log("통신 성공!", response);
  } catch (e) {
    console.log(e);
  }
};
