import React from 'react'
import { Sidebar } from '@/components/dashboard/Sidebar'
import { DashNav } from '@/components/dashboard/dashnav'


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
   <div className="w-full flex flex-col relative">
      <DashNav/>
      <div className='w-full flex justify-center items-center'>
          <Sidebar/>
        <div className='ml-0 md:ml-72'>
              <div className='w-full md:w-5xl mx-auto mt-14 p-4'>
                  {children}
              </div>
        </div>
      </div>
   </div>
  )
}

export default Layout