/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-23 15:46:44
 * @LastEditors: Joe
 * @LastEditTime: 2022-06-03 14:52:30
 */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectList from "screens/project-list";
import ArrayTypeTest from "screens/array-type-test";
import Login from "App.test";
function App() {
  return (
    <div className="App">
      {/* <ProjectList></ProjectList> */}
      {/* <ArrayTypeTest></ArrayTypeTest> */}
      <Login></Login>
    </div>
  );
}

export default App;
