import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Layout({children}) {
  return (
      <div className='flex w-full min-h-screen flex-col '>
      <Header/>
    <main className='h-auto'>{children}</main>
    <Footer/>
      </div>
    
  )
}

export default Layout