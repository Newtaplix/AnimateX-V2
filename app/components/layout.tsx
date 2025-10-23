import React from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { DashNav } from '@/components/dashboard/dashnav'
import "highlight.js/styles/github-dark.css"


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
   <div>
      <DashNav/>
      <div className='w-full'>
          <Sidebar/>
        <div className='md:ml-45'>
              <div className='w-full md:w-5xl md:mx-auto mt-14 p-4'>
                  {children}
              </div>
        </div>
      </div>
   </div>
  )
}

export default Layout