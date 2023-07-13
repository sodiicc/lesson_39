import { SET_USER, SET_USER_NAME, SET_USER_ROLE } from "./actionTypes"

export const setUserName = (payload) => {
  return {
    type: SET_USER_NAME,
    payload
  }
}

export const setUserRole = (payload) => {
  return {
    type: SET_USER_ROLE,
    payload
  }
}

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}