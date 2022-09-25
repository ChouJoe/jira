/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-23 15:46:44
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 18:08:12
 */
import React from "react";

import "./App.css";

import { useAuth } from "context/auth_context";
import { AuthenticatedApp } from "authenticated-app";
import { UnAuthenticatedApp } from "unauthenticated-app";
function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <AuthenticatedApp></AuthenticatedApp>
      ) : (
        <UnAuthenticatedApp></UnAuthenticatedApp>
      )}
    </div>
  );
}

export default App;
