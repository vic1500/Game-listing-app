import React, { useContext, useEffect, useState } from 'react'
import logo1 from '../assets/Images/logo1.png'
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
    const [toggle, setToggle] = useState(false);
    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        console.log("Theme", theme);
        
    }, [])

  return (
    <div className='flex items-center p-3'>
        <img src={ logo1 } alt="logo" width={60} height={60} />
        <div className='flex bg-slate-200 p-2 w-full items-center mx-2 md:mx-5 rounded-full'>
            <HiOutlineMagnifyingGlass/>
            <input type="text" name="" id=""  className='bg-transparent outline-none w-full px-2' placeholder='Search Games'/>
        </div>
        <div onClick={() => {
            theme == 'light' ? (setTheme('dark'),localStorage.setItem('theme', 'dark')) : (setTheme('light'), localStorage.setItem('theme', 'light')); 
            setToggle(!toggle)
            }} className='cursor-pointer'>
            {toggle ? <HiMoon className='text-[35px] bg-slate-200  text-black p-1 rounded-full'/> : <HiSun className='text-[35px] bg-white text-black p-1 rounded-full'/>}  
        </div>
    </div>
  )
}

export default Header