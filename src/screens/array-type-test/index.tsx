/*
 * @Description:
 * @file name: File name
 * @version:
 * @Author: Joe
 * @Date: 2022-06-02 19:20:55
 * @LastEditors: Joe
 * @LastEditTime: 2022-06-02 20:16:06
 */
import React from "react";
import { useMount, useArray } from "utils";
interface Person {
  name: string;
  age: number;
}
export default function ArrayTypeTest() {
  const persons: Person[] = [
    { name: "jack", age: 25 },
    { name: "ma", age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  useMount(() => {
    // console.log(value.notExist);
    // add({name:'joe'})
    // removeIndex('123')
  });
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 30 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((p: Person, index: number) => (
        <div style={{ marginBottom: "30px" }} key={`${index}_${p}`}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{p.name}</span>
          <span>{p.age}</span>
        </div>
      ))}
    </div>
  );
}
