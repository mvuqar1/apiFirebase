import React from 'react'
import FormComponent from '../Components/FormComponent'
import { NavLink } from 'react-router-dom'



export default function AddPage() {
  

  return (
    <>
    <h1>Add Page</h1>
    <NavLink to="/">Go Back</NavLink>

    <FormComponent/>
    </>
  )
}
