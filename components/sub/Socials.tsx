import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Socials = () => {
    const socials = [
        {
            icon: "/tools/X.svg",
            link: "https://x.com/Animate8X"
        },
        {
            icon: "/tools/discord.svg",
            link: ""
        },
        {
            icon: "/tools/github.svg",
            link: "https://github.com/Newtaplix"
        },
        {
            icon: "/tools/linked.svg",
            link: "https://www.linkedin.com/in/ngwa-newton-raul-363a58340/"
        }
    ]
  return (
    <div className='flex items-center justify-center gap-4'>
        {
            socials.map((social, i) => 
            <Link href={social.link} key={i} className='p-[2px] rounded-full hover:bg-[var(--secondary-hover)]'>
                <Image src={social.icon} width={26} height={26} alt={social.icon}/>
            </Link>
            )
        }
    </div>
  )
}
