import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { Check, DollarSign, X } from 'lucide-react'
import { PrimaryButton } from '../sub/primarybutton'

export const Pricing = () => {
    const features = [
        {
            text: "20+ components.",
            state: "true"
        },
        {
            text: "Full web templates.",
            state: "none"
        },
        {
            text: "Component customisation.",
            state: "true"
        },
        {
            text: "Update notifications.",
            state: "none"
        },
        {
            text: "Theme support.",
            state: "none"
        },
        {
            text: "Downloadable Assets.",
            state: "none"
        },
        {
            text: "Complete Motion Course.",
            state: "none"
        },

    ]
  return (
    <div>
        <div className='center-container'>
            <div className=' w-full md:w-[80%] p-2 mx-auto'>
                <SectionPill icon={<DollarSign size={18}/>} text='Pricing'/>
                <h2 className='section-head px-2'>Pick the package that takes your animations further</h2>
                <div className='flex items-center justify-center gap-14 mt-4 flex-col md:flex-row'>
                    <div className='p-4 rounded-xl bg-[var(--secondary)] w-full md:w-90 flex flex-col gap-4 border border-col'>
                        <h2 className='text-2xl px-2 text-center'>Free Package</h2>
                        <h3 className='flex items-end'><span className='text-3xl font-bold'>$0</span><p>/Lifetime</p></h3>
                        <div className='flex flex-col gap-4'>
                            {
                                features.map((feature, i) => 
                                    <span key={i} className="flex-center gap-2">
                                        {feature.state !== "none" ? <Check className='text-green-500' size={18}/> : <X className='text-red-500' size={18}/>}
                                        {feature.text}
                                    </span>
                                )
                            }
                        </div>
                        <PrimaryButton text='Get Now' type='button'/>
                    </div>

                    <div className="p-[1px] relative h-fit w-full md:w-92">
                        <div className="h-full w-full rounded-xl absolute z-10 bg-linear-30 from-yellow-500 via-red-500 to-green-500 blur-[8px]"/>
                            <div className='p-4 rounded-xl bg-[var(--secondary)] z-20 relative 
                            w-full md:w-90 flex flex-col gap-4 border border-col'>
                                <h2 className='text-2xl px-2 text-center'>Premuim Package</h2>
                                <h3 className='flex items-end'><span className='text-3xl font-bold'>$49</span><p>/year</p></h3>
                                <div className='flex flex-col gap-4'>
                                    {
                                        features.map((feature, i) => 
                                            <span key={i} className="flex-center gap-2">
                                                <Check className='text-green-500' size={18}/> 
                                                {feature.text}
                                            </span>
                                        )
                                    }
                                </div>
                                <PrimaryButton text='Get Now'/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
