import { GalleryBlock } from '@/components/dashboard/galleryblock'
import React from 'react'
import { Status } from '@/components/gallery/status'
import { QuickSwitcher } from '@/components/gallery/quickswitch'
import { SignaturePad } from '@/components/ui/modals/sign'

const GalleryPage = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-4 w-full'>
        <GalleryBlock component={<SignaturePad/>} colspan={2} rowspan={3} inspiredBy='Jh3yy on X'/>
        <GalleryBlock component={<QuickSwitcher/>} rowspan={2} inspiredBy='Nitish Khagwal' colspan={2}/>
        <GalleryBlock rowspan={2}/>
        <GalleryBlock rowspan={2}/>
    </div>
  )
}

export default GalleryPage