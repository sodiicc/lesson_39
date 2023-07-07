import React, { useEffect, useRef, useState } from 'react'

export default function FormComponent() {
  const minNameLength = 5

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [errors, setErrors] = useState({
     name: '',
     email: '',
     pass: ''
  })

  const passRef = useRef(null)

  useEffect(() => {
    passRef.current.focus()
  }, [])

  const onNameChange = (event) => {
    const value = event.target.value

    setName(value)
    // if (value.length < minNameLength) error = `User name should be more then ${minNameLength} characters`

    // setErrors({...errors, name: error})
  }

  const onSubmitClick = (e) => {
    e.preventDefault()
    let error = ''
    if (name.length < minNameLength) error = `User name should be more then ${minNameLength} characters`

    setErrors({...errors, name: error})
  }

  return (
    <div>
      Form Here
      <form  action='http//:fake'>
        <div>
          <label>email</label>
          <input name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
          <p>{errors.email}</p>
        </div>
        <div>
          <label>Name</label>
          <input name='name' onChange={onNameChange} value={name} />
          <p>{errors.name}</p>
        </div>
        <div>
          <label>Password</label>
          <input name='pass' ref={passRef} type='password' onChange={(e) => setPass(e.target.value)} value={pass} />
          <p>{errors.pass}</p>
        </div>
        <div>
          <button onClick={onSubmitClick} type='submit'>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}
