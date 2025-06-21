import { apiClientService } from "./apiClientService.js";
let BASE_URL = "/likes";

export const getLikes = (userId, postId) => {
  const params = new URLSearchParams();
  if (userId) params.append("userId", userId);
  if (postId) params.append("postId", postId);

  return fetch(`${BASE_URL}?${params.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  })
    .then((response) => response.json())
    .then(async (data) => {
      await refreshToken();
      return data;
    })
    .catch((err) => {
      console.error("Error fetching likes:", err);
      throw err;
    });
};

export const changeLikeStatusWithUserIdAndPostId = async (body) => {
  return await apiClientService(`${BASE_URL}`,
    {
      method: "POST",
      body: JSON.stringify(body)
    })
};
