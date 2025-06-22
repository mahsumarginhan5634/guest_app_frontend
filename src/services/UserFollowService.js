import {apiClientService} from "./apiClientService.js";

let BASE_URL = "/user-follows"

export const getUserFollows = async (userId,followType) => {
    return await apiClientService(
        `${BASE_URL}/${userId}/${followType}`,
        {
            method:"GET",
        }
    )
}

export const getUsersFollowersAndFollowings = async (userId) => {
    return await apiClientService(
        `${BASE_URL}/${userId}`,
        {
            method:"GET",
        }
    )
}