/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:10:58
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-24 23:00:07
 */
import React from "react";
import { useState } from "react";
import List from "./list";
import SearchPanel from "./search-panel";
import { useDebounce } from "utils";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
export default function ProjectList() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { data: users } = useUsers();
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        users={users || []}
        dataSource={list || []}
        loading={isLoading}
      ></List>
    </Container>
  );
}
const Container = styled.div`
  padding: 3.2rem;
`;
