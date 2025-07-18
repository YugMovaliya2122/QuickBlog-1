
 
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Card = ({blog}) => {
 
    const { title, description, category,image,_id  } = blog;
       const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='w-full overflow-hidden rounded-lg shadow cursor-pointer hover:scale-102 hover:shadow-primary/25 transition-shadow duration-300'>
      <img src={image} alt="" className='aspect-video'/>
      {/* Tailwind CSS class to maintain a 16:9 aspect ratio (like YouTube or video frames). */}
      <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>
      {category}</span>
      <div className='p-5'>
           <h5 className='mb-2 font-medium text-grey-900'>{title}</h5>
           <p className='mb-3 text-xs text-grey-600' dangerouslySetInnerHTML={{"__html":description.slice(0,100)}}></p>
      </div>
    </div>
  )
}

export default Card
