
let BASE_URL = "/api/users";

export const getUserInfo = async (userId) => {
  // if (!userId) return;
  // if (localStorage.getItem("currentUser")) {
  //   return fetch(`${BASE_URL}/${userId}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: localStorage.getItem("tokenKey"),
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then(async (data) => {
  //       await refreshToken();
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching user:", err);
  //       throw err;
  //     });
  // }

  // return;
};

export const updateUserAvatar = async (userId, userData) => {
  return fetch(`${BASE_URL}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("tokenKey"),
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then(async (data) => {
      await refreshToken();
      return data;
    })
    .catch((err) => {
      console.error("Error updating user:", err);
      throw err;
    });
};
