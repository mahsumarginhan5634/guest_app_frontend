import {apiClientService} from "./apiClientService.js";

let BASE_URL = "/users";

export const updateUserAvatar = (file, userId) => {
    const formData = new FormData();
    formData.append("file", file);

    return apiClientService(
        `${BASE_URL}/${userId}`,
        {
            method: "PUT",
            body: formData
        },
    );
};