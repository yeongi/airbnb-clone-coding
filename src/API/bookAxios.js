import axios from "axios";
import { getCookie } from "../Lib/cookies";

export const API = axios.create({
  baseURL: "http://192.168.64.1:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
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
