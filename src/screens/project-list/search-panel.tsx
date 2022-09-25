/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-29 21:12:13
 * @LastEditors: Joe
 * @LastEditTime: 2022-09-20 22:22:05
 */
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
        <input
          type="text"
          value={param.name}
          onChange={(evt) => {
            setParam({ ...param, name: evt.target.value });
          }}
        />
        <select
          value={param.personId}
          onChange={(evt) => {
            setParam({ ...param, personId: evt.target.value });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
