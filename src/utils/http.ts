/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-29 23:03:57
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-24 21:28:04
 */
import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth_context";
const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = async (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiUrl}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "please login " });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};
//js中的typeof在runtime运行
//ts的typeof在静态编译时运行
//ts中的Utility type，常用的有Partial、Omit、Pick、Exclude
interface Person {
  name: string;
  age: number;
  height: number;
}
const partial: Partial<Person> = {};
const omit: Omit<Person, "name" | "age"> = { height: 124 };
type pick = Pick<Person, "name" | "age">;
type keysPerson = keyof Person;
type exclude = Exclude<keysPerson, "age">;

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endPoint, config]: Parameters<typeof http>) =>
    http(endPoint, { ...config, token: user?.token });
};
