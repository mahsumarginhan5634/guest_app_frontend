import { apiClientService } from "./apiClientService.js";

let BASE_URL = "/posts"

export const getPostsWithPageable = async () => {
  try {
    return await apiClientService(`${BASE_URL}`,
      {
        method: "GET"
      },
      false
    );
  }
  catch (error) {
    console.log("Error " + error);
  }

};

export const getPostById = (postId) => {
  return fetch(`${BASE_URL}/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
  })
};

export const createPost = async (body) => {
  return await apiClientService(
    `${BASE_URL}`,
    {
      method: "POST",
      body: JSON.stringify(body),
    },
  );
};

export const deletePostByPostId = async (postId) => {
  return await apiClientService(
    `${BASE_URL}?id=${postId}`,
    {
      method: "DELETE",
    }
  );
}
