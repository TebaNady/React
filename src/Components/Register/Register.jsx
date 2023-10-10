import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {
  // const validate = (values) => {
  //   let errors = {};
  //   if (!values.name) {
  //     errors.name = "Name is required"
  //   }
  //   else if (values.name.length < 3) {
  //     errors.name = "Name must be more than 3 characters"
  //   }
  //   else if (values.name.length > 15) {
  //     errors.name = "Name must be less than 15 characters"
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required"
  //   }
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = "Please enter a valid email"
  //   }
  //   if (!values.age) {
  //     errors.age = "Age is required"
  //   }
  //   else if (values.age < 10) {
  //     errors.age = "Age must be more than 10"
  //   }
  //   else if (values.age > 60) {
  //     errors.age = "Age must be less than 60"
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required"
  //   }
  //   else if (!/^[A-Z][a-z0-9]{4,8}$/i.test(values.password)) {
  //     errors.password = "Please enter a valid password"
  //   }
  //   if (!values.rePassword) {
  //     errors.rePassword = "Password Confirmation is required"
  //   }
  //   else if (values.password != values.rePassword) {
  //     errors.rePassword = "Password not match"
  //   }
  //   return errors;
  // }
  const validationSchema = Yup.object({
    name: Yup.string().max(15,"Name must be less than 15 characters").min(3,"Name must be more than 3 characters").required("Name is required"),
    email: Yup.string().email("Please enter a valid email").required("Email is required, sample: teba7033@gmail.com"),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{4,8}$/,"Please enter a valid password, must start with capital letter and include numbers").required("Password is required"),
    rePassword: Yup.string().matches(/^[A-Z][a-z0-9]{4,8}$/,"Password doesn't match").required("Password Confirmation is required"),
    age: Yup.number().max(10,"Age must be less than 10").min(60,"Age must be less than 60").required("Age is required")
  })
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      age: 0
    }, validationSchema,
    onSubmit: (values) => {
      console.log("Done");
    }
  })
  return (
    <div className="container text-center my-5">
      <div className="user my-3">
        <h1><i className="fa fa-edit user-icon"></i></h1>
        <h4 className="login">Register</h4>
      </div>
      <div className="card p-5 w-50 m-auto">
        <form onSubmit={formik.handleSubmit}>
          <input className="form-control" onBlur={formik.handleBlur} placeholder="Enter your Name" type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
          {formik.errors.name && formik.touched.name ? <div className='alert alert-danger'>
            {formik.errors.name}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
            {formik.errors.email}
          </div> : ""}
          <input className="form-control my-2" onBlur={formik.handleBlur} placeholder="Enter your Age" type="number" name="age" value={formik.values.age} onChange={formik.handleChange} />
          {formik.errors.age && formik.touched.age ? <div className='alert alert-danger'>
            {formik.errors.age}
          </div> : ""}
          <input className="form-control" onBlur={formik.handleBlur} placeholder="Enter your Password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>
            {formik.errors.password}
          </div> : ""}
          <input className="form-control  my-2" onBlur={formik.handleBlur} placeholder="Password Confirmation" type="password" name="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} />
          {formik.errors.rePassword && formik.touched.rePassword ? <div className='alert alert-danger'>
            {formik.errors.rePassword}
          </div> : ""}
          <button className="btn btn-outline-dark my-4 w-100 rounded" type='submit'>Register</button>
          <Link className="btn btn-outline-dark" to="/login">Login</Link>
        </form>
      </div>
    </div>
  )
}
