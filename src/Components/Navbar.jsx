import React, { useState } from 'react'
import logo from '../assets/main.jpg'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { FaMicrophone } from 'react-icons/fa'
import { MdOutlineVideoCall } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {  
    const[search,setsearch] = useState('');
    const navigate = useNavigate();
    const handlesubmit = (e) =>{
        e.preventDefault();
        if(search){
            navigate(`/search/${search}`);
            setsearch('')
        }
    }
    console.log(search);
    
    return (
    <div className='flex justify-between h-16 px-5 py-2 align-middle fixed w-[100%] overflow-hidden top-0 bg-black'>
        <div className='flex h-full justify-center align-middle'>
            <IoReorderThreeOutline className='text-4xl h-full mx-1 font-extralight text-white'/>
           <Link to="/"><img className='w-28 mt-2' src={logo} alt="" /></Link> 
        </div>
        <div className='w-3/5 flex justify-center align-middle'>
            <input className='text-lg border-solid border-l border-t border-b border-gray-800 rounded-l-2xl w-3/5 p-2 my-1 bg-black text-white' placeholder='Search' type="text" value={search} onChange={(e)=>setsearch(e.target.value)}/>
            <button className='text-2xl rounded-r-2xl py-2 px-4 bg-gray-800 my-1 mx-1 text-white' onClick={handlesubmit} ><CiSearch /></button>
            <FaMicrophone className='text-lg my-1 mx-5 rounded-3xl p-3 bg-slate-800 w-10 h-10 text-white' />
        </div>
        <div className='flex justify-center align-middle'>
        <MdOutlineVideoCall className='text-2xl my-3 mx-5 text-white' />
        <IoMdNotificationsOutline className='text-2xl my-3 mx-5 text-white' />
        <CgProfile className='text-2xl my-3 mx-5 text-white' />
        </div>
    </div>
  )
}

export default Navbar