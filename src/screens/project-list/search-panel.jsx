/*
 * @Description: 
 * @file name: File name
 * @version: 
 * @Author: Joe
 * @Date: 2022-05-29 21:12:13
 * @LastEditors: Joe
 * @LastEditTime: 2022-05-30 16:08:59
 */
import React from 'react'
import { useState, useEffect } from 'react'
export default function SearchPanel({ users, param, setParam }) {


  return (
    <form>
      <div>
        <input type="text" value={param.name} onChange={(evt) => { setParam({ ...param, name: evt.target.value }) }} />
        <select value={param.personId} onChange={(evt) => { setParam({ ...param, personId: evt.target.value }) }}>
          <option value={""}>负责人</option>
          {
            users.map(e => <option key={e.id} value={e.id}>{e.name}</option>)
          }
        </select>
      </div>
    </form>
  )
}
