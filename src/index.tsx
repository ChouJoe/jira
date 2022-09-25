/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-25 14:25:42
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-25 13:05:27
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { loadDevTools } from "jira-dev-tool";
import { AppProviders } from "context";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// root.render(
//   <React.StrictMode>
//     <AppProviders>
//       <App />
//     </AppProviders>

//   </React.StrictMode>
// )
loadDevTools(() =>
  root.render(
    <React.StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </React.StrictMode>
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
