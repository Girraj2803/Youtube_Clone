import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom'
import { FetchData } from '../utils/FetchData';
import { Link } from 'react-router-dom';
import Videocard from './Videocard';
import SearchCard from './SearchCard';

const Search = () => {
    const {search} = useParams();
    const[videos,setvideos] = useState(null);
    useEffect(()=>{
        FetchData(`search?part=snippet&q=${search}`).then((data)=>{setvideos(data.items)});
     },[search])
     if(videos === null)
     {
        return(
            <h1>loading...</h1>
        )
     }
     console.log(videos);
  return (
    <div className= "bg-black flex">
        <div className='w-[15%]'>

        </div>
        <div className='w-[70%] p-10'> 
        {
          videos.map((video)=>(
                   <Link to= {"/video/"+video?.id?.videoId}> <SearchCard key={video.snippet.title} videos ={video}/></Link>
                ))
        }
        </div>
        <div className='w-[15%]'>

        </div>
      

       
    </div>
  )
}

export default Search