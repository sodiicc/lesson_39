import axios from "axios"
import { setUser } from "../store/actions"

export function fetchUser(id) {
  return async (dispatch, getState) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}users/${id}`)
    console.log('response', response.data)
    // const data = await response.json()
    dispatch(setUser(response.data))
  }
}