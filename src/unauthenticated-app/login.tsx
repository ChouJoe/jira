/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-25 14:25:42
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 18:02:13
 */
import { useAuth } from "context/auth_context";
import React from "react";

export default function LoginScreen() {
  const { login } = useAuth();
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
        <label htmlFor="password">密码</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">登录</button>
    </form>
  );
}
