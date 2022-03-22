import axios from "axios";
import { REGISTER_USER } from "./types";

export function registerUser(data) {
  const request = axios.post("", data).then((res) => res.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}
