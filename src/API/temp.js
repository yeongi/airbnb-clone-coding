import axios from "axios";

export const tempAPI = axios.create({
  baseURL: "http://192.168.0.31:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTempData = async () => {
  const response = await tempAPI.get("/oauth2/redirect");
  console.log(response);
};

export const getLog = async () => {
  try {
    const response = await tempAPI.get("/oauth2/authorize/google");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
