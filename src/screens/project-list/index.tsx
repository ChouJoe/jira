/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:10:58
 * @LastEditors: Joe
 * @LastEditTime: 2022-06-01 17:14:01
 */
import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import List from "./list";
import { cleanObject } from "utils";
import SearchPanel from "./search-panel";
import { useMount } from "utils";
import { useDebounce } from "utils";
const baseUrl = process.env.REACT_APP_API_URL;
export default function ProjectList() {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    fetch(
      `${baseUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    ).then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list}></List>
    </div>
  );
}
