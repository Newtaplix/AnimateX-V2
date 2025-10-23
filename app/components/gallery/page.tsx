import { GalleryBlock } from '@/components/dashboard/galleryblock'
import React from 'react'
import { Status } from '@/components/gallery/status'

const GalleryPage = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-4 w-full'>
        <GalleryBlock component={<Status/>} colspan={2} rowspan={2}/>
        <GalleryBlock rowspan={1}/>
        <GalleryBlock rowspan={2}/>
        <GalleryBlock rowspan={2}/>
    </div>
  )
}

export default GalleryPage