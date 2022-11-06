/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-10-24 22:53:09
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-24 23:44:18
 */
import { useEffect } from "react";
import { User } from "screens/project-list/search-panel";
import { cleanObject } from "utils";
import { useHttp } from "./http";
import { useAsync } from "./use-async";

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();
  useEffect(() => {
    run(client(`users`, { data: cleanObject(param || {}) }));
    //eslint-disable-next-line
  }, [param]);
  return result;
};
