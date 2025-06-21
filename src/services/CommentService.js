import { apiClientService } from "./apiClientService.js";

let BASE_URL = "/comments";

export const getPostsComments = async (postId) => {
  return await apiClientService(
    `${BASE_URL}?postId=${postId}`,
    {
      method: "GET",
    },
    false
  );
};

export const createComment = async (body) => {
  return await apiClientService(
    `${BASE_URL}`,
    {
      method: "POST",
      body: JSON.stringify(body)
    }
  );
};
