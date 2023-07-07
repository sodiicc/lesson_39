// import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';

export default function FormikComponent() {
  const user = useSelector(store => store.user)
  console.log('user', user)
  return (
    <div>

    </div>
  )
}
