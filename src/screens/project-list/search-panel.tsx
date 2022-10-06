/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:12:13
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-05 21:50:49
 */
import { Input, Select } from "antd";
import React from "react";
export interface User {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
  token: string;
}
interface SearchPanelParam {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: React.Dispatch<React.SetStateAction<SearchPanelParam["param"]>>;
}
export default function SearchPanel({
  users,
  param,
  setParam,
}: SearchPanelParam) {
  return (
    <form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({ ...param, name: evt.target.value });
          }}
        />
        <Select
          value={param.personId}
          onChange={(value) => {
            setParam({ ...param, personId: value });
          }}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((e) => (
            <Select.Option key={e.id} value={e.id}>
              {e.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
}
