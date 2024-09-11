import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { FetchData } from '../utils/FetchData';
import { CgProfile } from 'react-icons/cg'
import Usetime from '../utils/Usetime';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from 'react-icons/io5';
const Videodetails = () => {
    const {videoid} = useParams();
    const[videodetails ,setvideosdetails] = useState(null);
    const[id,setid] = useState(videoid);
    const[videos,setvideos]= useState(null)
 
    useEffect(()=>{
        FetchData(`videos?part=snippet,statistics&id=${videoid}`).then((data)=>{setvideosdetails(data.items[0])});
        FetchData(`search?part=snippet&relatedToVideoId=${videoid}`).then((data)=>{setvideos(data.items)});

     },[videoid])
     if(videodetails === null)
        return(
        <h2>loading...</h2>
        )
    if(videos === null)
    {
        return(
            <h2>loading...</h2>
        )
    }
    console.log(videoid)
     const{snippet} = videodetails;
     const{statistics} = videodetails;
     const{viewCount,commentCount} = statistics;
     const view = parseInt(viewCount).toLocaleString();
     const comment = parseInt(commentCount).toLocaleString();
     const{title,publishedAt,channelTitle
     } = snippet;
     const time = Usetime(publishedAt);
     console.log(videos);
    //  console.log(videodetails);
  return (
    <div className='bg-black text-white w-full h-[calc(100vh-5rem)] mt-[65px] px-20 pt-3 flex'>
        <div>
        <ReactPlayer style={{'borderRadius':'20px'}} width={900} height={500} url={'https://www.youtube.com/watch?v='+videoid} controls playing={true}/>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <h2 className='text-lg flex gap-2'><CgProfile className='mt-1'/>{channelTitle}</h2>
        <h2 className='text-base font-bold'>{view} Views {time}</h2>
        <h2 className='text-base font-bold'>{comment} Comments</h2>
        </div>
        <div className='ml-10'>
        {
                videos.map((video)=>(
                   <Link to= {"/video/"+video?.id?.videoId}> <Videocard key={video.snippet.title} videos ={video}/></Link>
                ))
        }
        </div>
    </div>
  )
}

export default Videodetails;