import React from 'react'
import AdminHeader from '../components/header/AdminHeader'
import { Outlet } from 'react-router-dom'

export default function AdminTemplate() {
  return (
    <>
        <AdminHeader />
        <h1>ADMIN</h1>
        <Outlet />
    </>
  )
}
