import React from 'react'
import Usetime from '../utils/Usetime';

const Videocard = (props) => {
    // console.log(props)
    const{videos} = props;
    // console.log(id);
    const{snippet} = videos;
    const{thumbnails} = snippet;
    // console.log(snippet);
    const time = Usetime(snippet.
      publishTime);
  return (
    <div className='w-[400px] mb-1'>
        <div className='w-[380px] h-[250px] overflow-hidden rounded-xl'>
        <img src={thumbnails?.high?.url}  width="100%" height="100%" className='rounded-2xl object-center'/>
        </div>
        <h2 className='text-lg font-medium text-white'>{snippet.title}</h2>
        <h4 className='font-semibold text-gray-500'>{snippet.channelTitle}</h4>
        <h4 className='font-semibold text-gray-500'>{time}</h4>        
    </div>
  )
}

export default Videocard