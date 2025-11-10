"use client"
import React, { useState } from 'react'
import { LoadingButton } from '../ui/buttons/loadingButton'

const page = () => {
   const [loading, setIsLoading] = useState(false)
    const demo = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 5000)
    }
  return (
    <LoadingButton onClick={demo} loading={loading} />
  )
}

export default page