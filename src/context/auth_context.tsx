/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-09-25 11:02:01
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 12:49:14
 */
import React, { useState } from "react";
import * as auth from "auth-provider";
import { User } from "screens/project-list/search-panel";
interface AuthForm {
  username: string;
  password: string;
}
interface providerValue {
  user: User | null;
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = React.createContext<providerValue | undefined>(undefined);
AuthContext.displayName = "AuthContext";
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (form: AuthForm) =>
    auth.login(form).then((user) => setUser(user));
  const register = (form: AuthForm) =>
    auth.register(form).then((user) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be applied in AuthProvider");
  }
  return context;
};
