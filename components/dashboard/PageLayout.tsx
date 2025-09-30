"use client"
import {  Check, Clipboard, Code, Eye } from 'lucide-react'
import React, { useEffect, useState } from 'react'


interface props{
    prop:string,
    default: string,
    description: string
}

interface pageprop{
    title: string,
    type: string,
    codets: string,
    description: string,
    component: React.ReactNode,
    codejs: string,
    features: string[],
    props: props[]
}



const PageLayout = ({title, description, component, type, codets, codejs, features=[""], props}:pageprop) => {
    const [code, setCode] = useState("")
    // const code = "<button className='bg-redd-400 p-3'>Button</button>"
    // const codet = "<button className='bg-redd-400 p-3'>ButtonTS</button>"

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
    }
    
    // const [device, setDevice] = useState<string>("Laptop")
    // const features = [
    //     "Responsive",
    //     "Slight scale on click to give that fluid feel",
    //     "Fully customizable",
    //     "Perfect for hero sections, footers and cards"
    // ]

    // const sizes= [
    //     {
    //         icon: <Laptop size={18}/>,
    //         text: "Laptop"
    //     },
    //     {
    //         icon: <Tablet size={18}/>,
    //         text: "Tablet"
    //     },
    //     {
    //         icon: <Smartphone size={18}/>,
    //         text: "Mobile"
    //     }
    // ]
  return (
    <div className='flex flex-col gap-4'>
       <div>
            <div className='flex-center'>
                <h1 className='title'>{title}</h1>
                <span className='blue-gradient bg-clip-text text-transparent p-1 border-dashed
                 border-2 border-col bg-[var(--secondary)] '>{type}</span>
            </div>
            <p>{description}</p>
       </div>
       <div>
            <div className='w-full gap-4 flex flex-col'>
                <div className='flex-center justify-between w-full'>
                    <div className='flex-center p-2 rounded-xl border border-col bg-[var(--secondary)]'>
                        <span className='flex-center'><Eye size={18}/> Preview</span>
                        <span className='flex-center'><Code size={18}/> Code</span>
                    </div>
                    {/* <div className='flex-center gap-2 w-fit border border-col p-2 rounded-xl bg-[var(--secondary)]'>
                        {
                            sizes.map((size, i) => 
                                <span onClick={() => setDevice(size.text)} className='flex-center cursor-pointer'>{size.icon}{size.text}</span>
                            )
                        }
                    </div> */}
                </div>
                <div className={('p-2 w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col rounded-2xl md:p-4')}>
                    <div className='p-2 flex-center gap-2 '>
                        <span className='w-3 h-3 rounded-full bg-amber-500'></span>
                        <span className='w-3 h-3 rounded-full bg-green-500'></span>
                        <span className='w-3 h-3 rounded-full bg-red-500'></span>
                    </div>
                    <div 
                    className='h-[480px] flex-center justify-center gradient p-2 bg-[var(--bg)] border border-col rounded-2xl w-full'>
                            {component}
                    </div>
                </div>


                {/* code preview */}

                <h1 className='title mt-8'>Code</h1>
                <div className='w-full p-2 bg-[var(--secondary)] border border-col rounded-2xl md:p-4'>
                    <div className='p-2 flex-center gap-2'>
                        <span onClick={() => setCode(codets)} className=''>TS</span>
                        <span onClick={() => setCode(codejs)} className=''>JS</span>
                        <span onClick={handleCopy} className=''><Clipboard size={18}/></span>
                    </div>
                    <div className='h-[480px] gradient bg-[var(--bg)] border border-col rounded-2xl w-full'>
                       {code}
                    </div>
                </div>

                {/* key features */}
                <h1 className='title mt-8'>Key Features</h1>
                <div className='w-full flex flex-col gap-2 p-2'>
                    {
                        features.map((feat, i) => 
                            <span key={i} className='flex-center gap-2'>
                                <Check size={18}/>
                                {feat}
                            </span>
                        )
                    }
                </div>

                {/* component props */}
                <h1 className='title mt-8'>Props</h1>
                <table className='w-full text-center'>
                    <thead>
                        <tr>
                            <td className='p-2 border border-col'>Prop</td>
                            <td className='border border-col'>Default</td>
                            <td className='border border-col'>Description</td> 
                        </tr>
                    </thead>
                    <tbody>
                       {
                            props.map((prop, i) => 
                                <tr key={i}>
                                    <td className='p-2 border border-col'>{prop.prop}</td>
                                    <td className='border border-col'>{prop.default}</td>
                                    <td className='border border-col'>{prop.description}</td> 
                                </tr>
                            )
                       }
                    </tbody>
                </table>


            </div>
       </div>
    </div>
  )
}

export default PageLayout