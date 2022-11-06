import { Project } from "screens/project-list/list";
import { useHttp } from "./http";
import { useEffect } from "react";
import { cleanObject } from "utils";
import { useAsync } from "./use-async";
/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-10-24 22:45:31
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-24 22:49:55
 */
export const useProjects = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  useEffect(() => {
    run(client(`projects`, { data: cleanObject(param || {}) }));
    //eslint-disable-next-line
  }, [param]);
  return result;
};
