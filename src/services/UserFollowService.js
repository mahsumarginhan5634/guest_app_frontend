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

export const getMyFollowedsBirthdays = async (userId) => {
    return await apiClientService(
        `${BASE_URL}/birthdays/${userId}`,
        {
            method:"GET",
        }
    )
}

export const getMyFriendSuggestions = async (userId) => {
    return await apiClientService(
        `${BASE_URL}/follow-suggestions/${userId}`,
        {
            method:"GET",
        }
    )
}

export const followUser = async (followerId , usernameOfToBeFollowed) => {
    return apiClientService(
      `${BASE_URL}/follow-user/${followerId}/${usernameOfToBeFollowed}`,
        {
            method: "POST",
        }
    );
}

export const unfollowUser = async (followerId , usernameToBeUnfollowed) => {
    return apiClientService(
        `${BASE_URL}/unfollow-user/${followerId}/${usernameToBeUnfollowed}`,
        {
            method: "PUT",
        }
    );
}