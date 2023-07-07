import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setUserRole } from '../store/actions';

export default function FormikComponent() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [role, setRole] = useState('')

  const onBtnNameClick = () => {
    dispatch(setUserName(name))
  }

  const onBtnRoleClick = () => {
    dispatch(setUserRole(role))
  }

  // console.log('user', store.user)
  return (
    <div>
      USER
      <div>
        <input onChange={e => setName(e.target.value)} value={name} />
        <button onClick={onBtnNameClick}>SET USER NAME</button>
      </div>
      <div>
        <input onChange={e => setRole(e.target.value)} value={role} />
        <button onClick={onBtnRoleClick}>SET USER ROLE</button>
      </div>

      <h2>Global State</h2>
      <span>name</span>
      <h1>{store.user.name}</h1>
      <span>role</span>
      <h1>{store.user.role}</h1>
    </div>
  )
}