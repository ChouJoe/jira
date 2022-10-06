/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:10:58
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-06 22:08:30
 */
import React from "react";
import { useState, useEffect } from "react";
import qs from "qs";
import List from "./list";
import { cleanObject } from "utils";
import SearchPanel from "./search-panel";
import { useMount } from "utils";
import { useDebounce } from "utils";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

export default function ProjectList() {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const debounceParam = useDebounce(param, 1000);
  const client = useHttp();
  useEffect(() => {
    client(`projects`, { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list}></List>
    </Container>
  );
}
const Container = styled.div`
  padding: 3.2rem;
`;
