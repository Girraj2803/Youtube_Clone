import React from 'react'
import Usetime from '../utils/Usetime';
import { CgProfile } from 'react-icons/cg'
import { MdVerified } from "react-icons/md";

const SearchCard = (props) => {
    const{videos} = props;
    // console.log(id);
    const{snippet} = videos;
    const{thumbnails} = snippet;
    // console.log(snippet);
    const time = Usetime(snippet.
      publishTime);
  return (
    <div className='m-5 flex justify-center align-middle text-white'>
        <img src={thumbnails?.high?.url} alt="" srcset="" />
        <div className='py-10 px-5'>
        <h2 className='text-lg font-semibold'>{snippet?.title}</h2>
        <h2 className='text-base text-gray-300 font-medium'>{time}</h2>
        <br/>
        <h2 className='text-gray-300 flex'><CgProfile className='mt-1'/> {snippet?.channelTitle} <MdVerified className='mt-1'/></h2>
        </div>
        


    </div>
  )
}

export default SearchCard