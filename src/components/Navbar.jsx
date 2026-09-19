import React from 'react'
import dayjs from 'dayjs'
import { navLinks, navIcons } from '#constants'
import useWindowStore from '#store/window'


const Navbar = () => {
    const {openWindow} = useWindowStore();

  return (
    <nav>
        <div>
            <img src="/images/logo.svg" alt="logo" className="size-4 sm:size-auto"/>
            <p className='font-bold text-xs sm:text-sm whitespace-nowrap'>Siddhi's Portfolio</p>
            <ul>
                {navLinks.map(({id,name,type})=>(
                    <li key={id} onClick={()=> openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul className='hidden md:flex items-center gap-3'>
                {navIcons.map(({ id, img})=>(
                    <li key={id}>
                        <img src={img} className='icon-hover' alt={`icon-${id}`} />
                    </li>
                ))}
            </ul>

            <time className='text-xs sm:text-sm whitespace-nowrap'>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  )
}

export default Navbar
