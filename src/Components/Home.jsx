import React, { useEffect, useState } from 'react'
import { FetchData } from '../utils/FetchData';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Shimmer from '../utils/Shimmer';

const Home = () => {
    const[Videos,setvideos] = useState([]);
    const[selectedcategory,setselectedcategory] = useState('New Videos')
    useEffect(()=>{
       FetchData(`search?part=snippet&q=${selectedcategory}`).then((data)=>{setvideos(data.items)});
    },[selectedcategory])
    if(Videos.length ===  0)
    {
        return(
            <Shimmer/>
        )
    }
  return (
    <>
   <Sidebar selectedcategory={selectedcategory} setselectedcategory={setselectedcategory} />
    <div className='ml-[260px] mt-[60px] scroll-smooth bg-black pl-4'>
        <div className='flex flex-wrap gap-5'>
            {
                Videos.map((video)=>(
                   <Link to= {"/video/"+ video?.id?.videoId} key={video.snippet.title}> <Videocard key={video.snippet.title} videos ={video}/></Link>
                ))
            }
        </div>

     </div>
     </>
  )
}

export default Home