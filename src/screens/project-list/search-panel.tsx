/* @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import { Form, Input, Select } from "antd";
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
    <Form layout="inline" css={{ marginBottom: "2rem" }}>
      <Form.Item>
        <Input
          placeholder="项目名"
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({ ...param, name: evt.target.value });
          }}
        />
      </Form.Item>
      <Form.Item>
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
      </Form.Item>
    </Form>
  );
}
