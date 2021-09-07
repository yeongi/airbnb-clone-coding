import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.63.160:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export const postBookAxios = async (roomIndex, data) => {
  let res;
  try {
    const response = await API.post(`/reservations/${roomIndex}`, data);
    res = response;
    console.log(res);
  } catch (e) {
    console.log(e);
  }

  return res;
};
