import React from 'react';
import girraj from '../assets/girraj.ico'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import {IoMdHome, IoMdMusicalNotes } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg';
import { SiCplusplusbuilder } from 'react-icons/si';

const Sidebar = (props) => {
  const category = [{
    icon:<IoMdHome />,
    name:"Home",
    search:"new"
  },{
    icon:<IoMdMusicalNotes />,
    name:"Music",
    search:"indian music"
  },{
    icon:<FaReact />,
    name:"React",
    search:"react"
  },{
    icon:<SiCplusplusbuilder />,
    name:"C++",
    search:"C++"
  },{
    icon:<FaNodeJs />,
    name:"JS",
    search:"javascript"
  }
  ,{
    icon:<CgProfile />,
    name:"My Videos",
    search:"dsa"
  }
  ,{
    icon:<CgProfile/>,
    name:"Yogesh Fav",
    search:"Indian hiphop"
  }
  ,{
    icon:<CgProfile/>,
    name:"Atishay's Fav",
    search:"how to get a job"
  }
  ,{
    icon:<CgProfile/>,
    name:"Sajal Fav",
    search:"altaf raja"

  }
  ,{
    icon:<CgProfile/>,
    name:"Sister Fav",
    search:"how to clear exam without study"
  }
];
const{selectedcategory,setselectedcategory} = props;
  return (
    <div className='h-full bg-black w-[18%] fixed top-16'>
        {
          category.map((c)=>(
            <button className='text-white w-full flex justify-start align-middle gap-7 p-4 hover:bg-gray-400'onClick={()=>{
              setselectedcategory(c.search)
            }}>
            <h2 className='text-2xl'>{c.icon}</h2>
            <h1 className='text-base'>{c.name}</h1>
            </button>
          ))
        }
    </div>
  )
}

export default Sidebar