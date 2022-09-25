/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 17:55:09
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 18:16:48
 */
import React, { useState } from "react";
import LoginScreen from "./login";
import RegisterScreen from "./register";
export const UnAuthenticatedApp = () => {
  const [register, setRegister] = useState(false);
  return (
    <div>
      {register ? (
        <LoginScreen></LoginScreen>
      ) : (
        <RegisterScreen></RegisterScreen>
      )}
      <button onClick={() => setRegister(!register)}>
        切换至{!register ? "登录" : "注册"}页面
      </button>
    </div>
  );
};
