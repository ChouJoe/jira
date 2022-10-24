import { useEffect, useState } from "react";

/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-05-30 16:15:22
 * @LastEditors: Joe
 * @LastEditTime: 2022-10-07 12:47:25
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";
export const cleanObject = (object: object) => {
  let new_obj = { ...object };
  Object.keys(new_obj).forEach((key) => {
    let value = new_obj[key];
    if (isVoid(value)) {
      delete new_obj[key];
    }
  });
  return new_obj;
};
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    //eslint-disable-next-line
  }, []);
};
export const useDebounce = <T>(value: T, delay?: number): T => {
  const [prevalue, setValue] = useState(value);
  console.log("pre", prevalue);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return prevalue;
};
export const useArray = <T>(
  p: Array<T>
): {
  value: Array<T>;
  clear: () => void;
  removeIndex: (index: number) => void;
  add: (e: T) => void;
} => {
  const [value, setValue] = useState(p);
  function clear(): void {
    setValue([]);
  }
  function removeIndex(index: number): void {
    value.shift();
    setValue([...value]);
  }
  function add(ele: T): void {
    value.unshift(ele);
    setValue([...value]);
  }
  return { value, clear, removeIndex, add };
};
