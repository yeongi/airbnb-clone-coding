import axios from "axios";

export const RoomAPI = axios.create({
  baseURL: "https://react-http-training-199ed-default-rtdb.firebaseio.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getRoomAxios = async () => {
  let data;
  try {
    const response = await RoomAPI.get("/hostlist.json");
    data = await response;
  } catch (e) {
    console.log(e);
  }

  return data;
};

export const hostPostAxios = async (data) => {
  try {
    await RoomAPI.post("/hostlist.json", JSON.stringify(data));
    console.log("통신 성공!", data);
  } catch (e) {
    console.log(e);
  }
};
