import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import CartTab from './cartTab'
// import { useSelector } from 'react-redux'

const Layout = () => {
  return (
    <div>
              <main className="w-[1200px] max-w-full n-auto p-5 transform transition-transform duration-500">
                <Header />
                <Outlet />
            </main>
            <CartTab />
    </div>
  )
}

export default Layout
