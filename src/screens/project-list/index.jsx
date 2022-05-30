/*
 * @Description: 
 * @file name: File name
 * @version: 
 * @Author: Joe
 * @Date: 2022-05-29 21:10:58
 * @LastEditors: Joe
 * @LastEditTime: 2022-05-30 16:20:25
 */
import React from 'react'
import { useState, useEffect } from 'react'
import qs from 'qs'
import List from './list'
import { cleanObject } from 'utils'
import SearchPanel from './search-panel'
const baseUrl = process.env.REACT_APP_API_URL
export default function ProjectList() {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])
  useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [param])
  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  }, [])
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
