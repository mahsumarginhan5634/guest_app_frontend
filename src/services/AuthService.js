
import { apiClientService } from "./apiClientService.js";

let BASE_URL = "/auth";

export const login = async (body) => {
  return await apiClientService(`${BASE_URL}/login`,
    {
      method: "POST",
      body: JSON.stringify(body)
    },
    false);
};


export const register = async (body) => {
  return await apiClientService(`${BASE_URL}/register`,
    {
      method: "POST",
      body: JSON.stringify(body)
    },
    false);
};
