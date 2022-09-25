/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 10:49:29
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 12:47:34
 */
import React from "react";
import { AuthProvider } from "./auth_context";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
