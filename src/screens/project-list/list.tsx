/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:12:00
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-05 21:48:32
 */
import { Table } from "antd";
import React from "react";
import { User } from "./search-panel";

interface Project {
  name: string;
  personId: string;
  id: string;
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
      ]}
    ></Table>
  );
}
