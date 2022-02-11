import React from 'react'
import './adminTemplate.css'
import AdminHeader from '../../components/header/AdminHeader'
import { Outlet } from 'react-router-dom'

export default function AdminTemplate() {
  return (
    <>
        <AdminHeader />
        <div className='paddedContainer'>
          <Outlet />
        </div>
    </>
  )
}
