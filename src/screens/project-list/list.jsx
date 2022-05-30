/*
 * @Description: 
 * @file name: File name
 * @version: 
 * @Author: Joe
 * @Date: 2022-05-29 21:12:00
 * @LastEditors: Joe
 * @LastEditTime: 2022-05-30 16:08:38
 */
import React from 'react'

export default function List({ list, users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>项目</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project => <tr key={ project.personId}>
            <td>{project.name}</td>
            <td>{users.find(user => user.id === project.personId)?.name || "unknow"}</td>
          </tr>)
        }
      </tbody>


    </table>
  )
}
