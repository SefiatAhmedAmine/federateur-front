import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

export default function DefaultTemplate() {
  return (
    <>
        <Header />
        <h1>Home</h1>
        <Outlet />
    </>
  )
}
