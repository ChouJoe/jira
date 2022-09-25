/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-20 22:20:23
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 17:43:29
 */
import { User } from "screens/project-list/search-panel";
const baseUrl = process.env.REACT_APP_API_URL;
const localStroageKey = "__auth_provider_token__";
export const getToken = () => window.localStorage.getItem(localStroageKey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStroageKey, user.token);
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      throw Promise.reject(await response.json());
    }
  });
};
export const register = (data: { username: string; password: string }) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (response) => {
    if (response.ok) {
      return handleUserResponse(await response.json());
    } else {
      return Promise.reject(await response.json());
    }
  });
};
export const logout = async () =>
  window.localStorage.removeItem(localStroageKey);
