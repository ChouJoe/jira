/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-25 14:25:42
 * @LastEditors: Joe
 * @LastEditTime: 2022-06-19 22:24:15
 */
import React from "react";
const baseUrl = process.env.REACT_APP_API_URL;

export default function Login() {
  const login = (param: { username: string; password: string }) => {
    fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (response) => {
      if (response.ok) {
      }
    });
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    login({ username, password });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">用户名</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="oassword">密码</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
}
