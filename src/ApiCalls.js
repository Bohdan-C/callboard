import axios from "axios";
import { BASE_URL } from "../src/ApiCalls";

export const DELETE = axios.delete(`${BASE_URL}/${id}`);
export const GET = axios.delete(`${BASE_URL}`);

