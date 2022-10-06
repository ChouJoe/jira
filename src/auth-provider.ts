/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-20 22:20:23
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-05 17:53:24
 */
import { User } from "screens/project-list/search-panel";
import { http } from "utils/http";
const baseUrl = process.env.REACT_APP_API_URL;
const localStroageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStroageKey);
export const handleUserResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStroageKey, user.token);
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return http("login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    data,
  })
    .then((data) => {
      return handleUserResponse(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
export const register = (data: { username: string; password: string }) => {
  return http(`register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  })
    .then((data) => {
      return handleUserResponse(data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
export const logout = async () =>
  window.localStorage.removeItem(localStroageKey);
