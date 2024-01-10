import React, { useEffect, useState } from 'react'
import styles from 'styles/Teams.module.css'
import {Button} from 'antd'
import { useGetTeams } from '@/hooks/useGetTeams';
const Teams = () => {
  const nav = ()=>{
    window.location.href = '/createTeam'
  }
  const [list , setList] = useState(null)
  const getList = async()=>{
    const List =await useGetTeams()
    setList(List)
  }
  // useEffect(()=>{
  //   getList()
  // },[])
  const renderList = ()=>{
    
  }
  return (
    <div className={styles.container}>
      <p className={styles.t}>Teams</p>
      <div className={styles.teams}>
      {list?
        list.forEach((item)=>{
          return (
            <div className={styles.card}>
          <div className={styles.card2}>
            <p className={styles.tittle}>competition protocol</p>
            <p className={styles.trace}>: zero application</p>
            <p className={styles.desc}>: a good good competition protocol</p>
          </div>
        </div>
          )
        }):
        <div>aaaawdinxakjsxnkjabduowduwadiaeodpankxaslnxnhiohadwinaknsxln</div>}
      </div>
      <Button type='primary' className={styles.btn} onClick={nav}> Create Team </Button>
    </div>
  )
}

export default Teams