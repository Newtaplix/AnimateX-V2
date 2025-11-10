"use client"
import React, { Suspense, useEffect, useRef, useState } from 'react'
import CodeBlock from '../sub/codeblock'
import { PrimaryButton } from '../sub/primarybutton'
import { CopyButton } from '../ui/buttons/copy'
import { motion as m, useInView } from 'framer-motion'
import { ReportBug } from '../sub/reportbug'
import { cn } from '@/lib/utils'
import { ComponentLoader } from '../sub/componentLoader'
import { RefreshCcw } from 'lucide-react'
import { Footer } from '../main/Footer'
import { PropBlock } from '../sub/propblock'


interface props{
    prop:string,
    default: string,
    description: string
}

interface variants{
    prop: string,
    component: React.ReactNode
}

interface sections{
    id: number,
    title: string
}

interface pageprop{
    title: string,
    type: string,
    codets: string,
    description: string,
    component: React.ReactNode,
    codejs: string,
    features: string[],
    props: props[],
    usecasecode: string,
    componentType?: string
    variants?: variants[],
    sections?: sections[],
    installCode?: string
}



const PageLayout = ({title, variants, installCode,
    description, component, type, sections, 
    codets, codejs, features=[""], props, usecasecode, componentType="block"}:pageprop) => {
    const [code, setCode] = useState({language: "tsx", code: codets})
    const [current, setCurrent] = useState<string>("Preview")
    const [using, setUsing] = useState("cli")
    const [key, setKey] = useState(0)
    
    const dependencies = `npm i motion lucide-react tailwind-merge clsx`

    const utilsCode = `
            import { clsx, type ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

    `

    const container1 = useRef(null)
    const isInView = useInView(container1, { amount: 0.4})
    const container2 = useRef(null)
    const isInView2 = useInView(container2, { amount: 0.4})
    const container3 = useRef(null)
    const isInView3 = useInView(container3, { amount: 0.4})
    const container4 = useRef(null)
    const isInView4 = useInView(container4, { amount: 0.4})
    
    const containervar = useRef(null)
    const isInViewVar = useInView(containervar, { amount: 0.4})
    const [currentView, setView] = useState(0)

    const Reload = () => {
        setKey((prev) => prev + 1)
    }

    useEffect(() => {
        if(isInView){
            setView(0)
        }
        if(isInView2){
            setView(2)
        }
        if(isInView3){
            setView(3)
        }
        if(isInView4){
            setView(4)
        }
        if(isInViewVar){
           setView(1)
        }
    }, [isInView, isInView2, isInView3, isInView4, isInViewVar])

    const handleCopy = () => {
        navigator.clipboard.writeText(code.code)
    }
    const customsections = [
        {
            id:0,
            title: "Preview"
        },
        {
            id:2,
            title: "Installation"
        },
        {
            id:3,
            title: "Props"
        },
        {
            id:4,
            title: "Report Bug"
        }
      ]
    const asections = sections ? sections : customsections
 
   
  return (
    <div className="flex gap-2">
        <div className='flex flex-col gap-4 w-full md:max-w-[820px]'> 
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
                            <div className='flex items-center rounded-xl'>
                                <span onClick={() => setCurrent("Preview")} 
                                className={cn('flex-center cursor-pointer p-2 rounded-md', current === "Preview" ? "bg-[var(--secondary-hover)] " : "")}>Preview</span>
                                <span onClick={() => setCurrent("Code")} 
                                className={cn('flex-center cursor-pointer p-2 rounded-md', current === "Code" ? "bg-[var(--secondary-hover)] " : "")}>
                                    Code</span>
                            </div>
                        
                        </div>
                    {
                            componentType === "block" ?
                            <div  ref={container1} className={('p-[10px] rounded-[16px] w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col')}>
                                <div key={key}
                                className='min-h-[490px] md:h-[480px] flex-center justify-center relative gradient p-2 bg-[var(--bg)] border border-col rounded-[6px] w-full'>
                                        {
                                            current === "Preview" &&
                                            <button onClick={Reload} className='p-2 cursor-pointer bg-[var(--bg)] rounded-md absolute top-2 right-2'><RefreshCcw/></button>
                                        }
                                        {current === "Preview" ? 
                                        <Suspense fallback={<ComponentLoader/>}>
                                            {component}
                                        </Suspense> : 
                                        <div className='w-full h-full'>
                                            <CodeBlock language="tsx" code={usecasecode}/>
                                        </div>}
                                </div>
                            </div> :
                            <div className="w-full gradient">
                                {component}
                            </div>
                            
                    }


                    {
                        variants &&
                       <div ref={containervar} className="flex flex-col mt-4 gap-4">
                        <h1 className="text-2xl">Other Varaints</h1>
                            {
                                 variants.map((vari, i) => 
                                    <div className="flex flex-col gap-4" key={i}>
                                         <h2 className='flex gap-2 items-center'>With props <PropBlock prop={vari.prop}/></h2>
                                         <div className={('p-[10px] w-full bg-[var(--secondary)] transition-all duration-300 @container mx-auto border border-col rounded-[16px]')}>
                                             <div 
                                             className='min-h-[300px] md:min-h-[480px] flex-center justify-center gradient p-2 bg-[var(--bg)] border border-col rounded-[6px] w-full'>
                                                 {vari.component} 
                                             </div>
                                         </div>     
                                    </div>
                                 )
                            }
                       </div>
                    }


                        {/* code preview */}

                        <h1 className='title mt-8'>Installation</h1>

                        <div ref={container2} className='w-full flex'>
                            <div onClick={() => setUsing("cli")} className='p-2 cursor-pointer rounded-md relative'>
                               {
                                    using === "cli" &&
                                     <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-[var(--secondary-hover)] -z-10'/>
                               }
                                CLI
                            </div>
                            <div onClick={() => setUsing("man")} className='p-2 cursor-pointer rounded-md relative'>
                                {
                                    using === "man" &&
                                     <m.div layoutId='lip' className='absolute rounded-md inset-0 bg-[var(--secondary-hover)] -z-10'/>
                               }
                                Manual
                            </div>
                        </div>

                        {
                            using === "cli" &&
                            <div className='w-full rounded-md flex flex-col gap-2 relative pl-5 border-l border-col'>
                                 <div className='absolute top-0 left-0 w-2 bg-[var(--secondary-hover)] rounded-r-xl h-8'/>
                                <span className='mt-1'>Run the following command</span>
                        
                                <CodeBlock language={"jsx"} code={installCode ? installCode : ""}/>
                            </div>

                        }

                        {
                            using === "man" &&
                           <div className='flex flex-col gap-4 border-l border-col'>
                                <div className='flex flex-col gap-4 relative pl-5'>
                                    <div className='absolute top-0 left-0 w-2 bg-[var(--secondary-hover)] rounded-r-xl h-8'/>
                                    <span className='mt-1'>Install dependencies</span>
                                    <div className='w-full h-20 rounded-md relative'>
                                        <CodeBlock language={"jsx"} code={dependencies}/>
                                    </div>
                                    <span className='mt-1'>lib/utils.ts</span>
                                    <CodeBlock language={"jsx"} code={utilsCode}/>
                                </div>
                                <div className='pl-5 relative flex flex-col gap-4'>
                                    <div className='absolute top-0 left-0 w-2 bg-[var(--secondary-hover)] rounded-r-xl h-8'/>
                                    <span className='mt-1'>Copy the source code</span>    
                                    <div className='w-full p-[10px] bg-[var(--secondary)] border border-col rounded-[16px]'>    
                                        <div className='h-[480px] md:h-[280px] gradient overflow-x-hidden
                                        bg-[var(--bg)] border border-col relative rounded-[6px] w-full'>
                                            
                                            <div className='p-[1px] flex-center absolute top-2 z-20 right-8 w-fit rounded-md bg-[var(--secondary)] gap-2'>
                                                <span onClick={() => setCode({language: "tsx", code: codets})} className='cursor-pointer px-2 py-1 rounded hover:bg-[var(--secondary-hover)]'>TS</span>
                                                <span onClick={() => setCode({language: "jsx", code: codejs})} className='cursor-pointer px-2 py-1 rounded hover:bg-[var(--secondary-hover)]'>JS</span>
                                                <CopyButton onClick={handleCopy} className='py-2 hover:bg-[var(--secondary-hover)] rounded-md w-fit px-2' animationVariant={2}/>
                                            
                                            </div>
                                            {
                                                type === "Pro" && (
                                                    <>
                                                        <div className='absolute top-0 right-0 inset-0 opacity-85 h-full w-full z-10 bg-[var(--bg)]'/>
                                                            <div className='absolute top-0 right-0 inset-0 h-full w-full z-20 flex items-center justify-center'>
                                                                <PrimaryButton text="Go Premuim"/>
                                                        </div>         
                                                    </>
                                                )
                                            }
                                        
                                            <div className={cn('h-full overflow-hidden overflow-y-scroll', type !== "Pro" && "")}>
                                                <CodeBlock type='maincode' language={code.language} code={code.code}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        }

                        {/* component props */}
                        <h1 className='title mt-8'>Props</h1>
                        <div ref={container3} className='w-full overflow-x-auto'>
                            <table className='w-full text-center min-w-[600px]'>
                                <thead>
                                    <tr className='font-bold'>
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

                        {/* <div className='mt-5'>
                            <h1 className='text-2xl flex gap-2 items-center'><Bug size={20}/>Report a bug</h1>
                        </div> */}
                       <div ref={container4} className='w-full flex items-center min-h-80 justify-center'>
                             <ReportBug id="main" className='w-full'>
                                <div className='py-2 mt-4 flex md:flex-row flex-col w-full gap-4 justify-between'>
                        
                                    <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black w-full
                                    focus:outline-2 focus:outline-blue-500 border-2 border-gray-200 dark:border-neutral-900 md:w-[49%]' 
                                    type='text' placeholder='Name'/>

                                    <input className='px-2 py-1 rounded-md bg-gray-50 dark:bg-black border-2 focus:outline-2 focus:outline-blue-500
                                    border-gray-200 dark:border-neutral-900 md:w-[49%] w-full' 
                                    type='email' placeholder='Email'/>

                                </div>
                                <textarea style={{resize: "none"}} className='px-2 py-1 h-[120px] focus:outline-2 focus:outline-blue-500
                                rounded-md bg-gray-50 dark:bg-black border-2 border-gray-200 dark:border-neutral-900 w-[100%]'
                                placeholder='Provide details about the issue..'></textarea>
                            </ReportBug>
                       </div>
                       <div>
                            <Footer/>
                       </div>
                    </div>
            </div>
            </div>

    {/* on this page section */}

            <div className="w-50 hidden fixed right-6 top-20 md:flex md:flex-col pt-4 h-full">    
                <div className='w-full p-2 flex flex-col top-24'>
                    <p className='mb-4'>On this page</p>
                    <div className='px-2 flex flex-col'>
                       {
                            asections.map((sec, i) =>
                                <div key={i} className={cn('border-l-2 border-col text-[14px] relative px-4 py-[2px]',
                                    currentView === sec.id && "text-blue-500"
                                )}>
                                    {sec.title}
                                    {
                                        currentView === sec.id &&
                                        <m.div  
                                        className='w-[2px] rounded-full bg-blue-500 h-full -left-0 -translate-x-full absolute top-0'/>
                                    }
                                </div>
                            )
                       }
                    </div>
                </div>
            </div>

    </div>
  )
}

export default PageLayout