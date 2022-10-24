/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:12:00
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-16 21:08:51
 */
import { Table, TableProps } from "antd";
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
interface ListProps extends TableProps<Project> {
  users: User[];
}
export default function List({ users, ...props }: ListProps) {
  return (
    <Table
      rowKey={"id"}
      pagination={false}
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
      {...props}
    ></Table>
  );
}
