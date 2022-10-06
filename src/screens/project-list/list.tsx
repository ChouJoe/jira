/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:12:00
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-06 22:16:21
 */
import { Table } from "antd";
import dayjs from "dayjs";
import React from "react";
import { User } from "./search-panel";

interface Project {
  name: string;
  personId: string;
  id: string;
  pin: boolean;
  organization: string;
  created: number;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export default function List({ list, users }: ListProps) {
  return (
    <Table
      pagination={false}
      dataSource={list}
      columns={[
        {
          title: "项目",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "部门",
          dataIndex: "organization",
        },
        {
          title: "负责人",
          render(value, project) {
            return (
              <span>
                {users.find((user) => user.id === project.personId)?.name ||
                  "unknow"}
              </span>
            );
          },
        },
        {
          title: "创建时间",
          render(value, project) {
            return (
              <span>
                {project.created
                  ? dayjs(project.created).format("YYYY-MM-DD")
                  : "无"}
              </span>
            );
          },
        },
      ]}
    ></Table>
  );
}
