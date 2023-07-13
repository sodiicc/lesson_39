import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import React from 'react'
import { useSelector } from 'react-redux';
import * as Yup from 'yup'

export default function FormikComponent({ children }) {
  const errorMsg = msg => <div className='error'>{msg}</div>

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, errorMsg('Must be 15 characters or less'))
  //       .min(5, errorMsg('Must be more then 5 characters'))
  //       .required(errorMsg('Required')),
  //     lastName: Yup.string()
  //       .max(20, errorMsg('Must be 20 characters or less'))
  //       .required(errorMsg('Required')),
  //     email: Yup.string().email(errorMsg('Invalid email address')).required(errorMsg('Required')),
  //   }),
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // })
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, errorMsg('Must be 15 characters or less'))
          .min(5, errorMsg('Must be more then 5 characters'))
          .required(errorMsg('Required')),
        lastName: Yup.string()
          .max(20, errorMsg('Must be 20 characters or less'))
          .required(errorMsg('Required')),
        email: Yup.string().email(errorMsg('Invalid email address')).required(errorMsg('Required')),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <div>

          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" as='textarea' />
          <ErrorMessage name="firstName" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" as='select'>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="lastName" />

        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    // <form onSubmit={formik.handleSubmit}>
    //   <div>

    //    <label htmlFor="firstName">First Name</label>
    //    <input
    //      id="firstName"
    //      type="text"
    //      {...formik.getFieldProps('firstName')}
    //    />
    //    {formik.touched.firstName && formik.errors.firstName ? (
    //      <div>{formik.errors.firstName}</div>
    //    ) : null}
    //   </div>

    //    <div>
    //    <label htmlFor="lastName">Last Name</label>
    //    <input
    //      id="lastName"
    //      type="text"
    //      {...formik.getFieldProps('lastName')}
    //    />
    //    {formik.touched.lastName && formik.errors.lastName ? (
    //      <div>{formik.errors.lastName}</div>
    //    ) : null}

    //    </div>

    //    <div>
    //    <label htmlFor="email">Email Address</label>
    //    <input
    //      id="email"
    //      type="email"
    //      {...formik.getFieldProps('email')}
    //    />
    //    {formik.touched.email && formik.errors.email ? (
    //      <div>{formik.errors.email}</div>
    //    ) : null}

    //    </div>

    //    <button type="submit">Submit</button>
    //    {children}
    //  </form>
  )
}
