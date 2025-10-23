import { DashNav } from '@/components/dashboard/dashnav'
import { Sidebar } from '@/components/dashboard/Sidebar'
import React from 'react'

const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
    return (
     <div className="w-full flex flex-col relative">
        <DashNav/>
        <div className='w-full flex justify-center items-center'>
            <Sidebar/>
          <div className='ml-0 md:ml-72 w-full'>
                <div className='w-full max-w-5xl mx-auto mt-14 p-4'>
                    {children}
                </div>
          </div>
        </div>
     </div>
    )
  }
  
  export default Layout