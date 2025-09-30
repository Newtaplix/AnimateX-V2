"use client"
import React from 'react'
import { SectionPill } from '../sub/sectionpill'
import { Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Community = () => {
    const social = [
        {
            img: "/tools/x.svg",
            name: "Twitter",
            text: "Follow us on X to get latest updates.",
            link: ""
        },
        {
            img: "/tools/discord.svg",
            name: "Discord",
            text: "Join the community, ask questions and share tips.",
            link: ""
        },
        {
            img: "/tools/github.svg",
            name: "Twitter",
            text: "Report bugs and request features .",
            link: ""
        }
    ]
  return (
    <div>
        <div className='center-container'>
            <div className='p-2 md:w-[80%] mx-auto'>
                <SectionPill icon={<Users size={18}/>} text='Community'/>
                <h2 className='section-head px-2'>Join our Community. Connect, Learn and Grow with fellow techies. </h2>
                <div className='flex gap-2 md:flex-row flex-col mt-4'>
                    {
                        social.map((soc, i) => 
                            <Link key={i} href={soc.link} className='rounded-2xl hover:bg-[var(--secondary-hover)] flex-1 justify-center cursor-pointer
                            flex-col-center border border-col items-center bg-[var(--secondary)] gap-3 p-6'>
                                <Image src={soc.img} width={50} height={50} alt={soc.img}/>
                                <span>{soc.name}</span>
                                <p className='text-center'>{soc.text}</p>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
