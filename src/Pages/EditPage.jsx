import React from 'react'
import EditComponent from '../Components/EditComponent'
import {NavLink} from 'react-router-dom'

    export default function EditPage() {
  return (
    <>
    <h1>Edit User</h1>
        <NavLink to="/">Go Back</NavLink>
        <EditComponent />
    </>
    )
}
