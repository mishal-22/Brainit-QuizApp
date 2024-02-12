import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminComponents/AdminHeader'
import Footer from './Footer'

function AdminLayout() {
  return (
    <div>
        <AdminHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminLayout