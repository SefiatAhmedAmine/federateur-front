import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'

export default function DefaultTemplate() {
  return (
    <>
        <Header />
        
        <Outlet />
    </>
  )
}
