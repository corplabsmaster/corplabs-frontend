/* @flow */

import axios from "axios";

import { getUser } from "@services/auth";

const API_URL = process.env.API_URL;
const token = getUser().token;

export const fetchAPI = async (
  url: string,
  opts: any,
  baseURL: string = API_URL
): string => {
  axios.defaults.baseURL = baseURL;
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";

  try {
    const { data } = await axios({
      url,
      ...opts,
    });

    return data;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    if (error.request) {
      return error.request;
    }

    return error.message;
  }
};
