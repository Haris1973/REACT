import React from 'react'
import { useParams } from 'react-router-dom'

function CourseDetail() {

  const param= useParams();

  console.log(param.id);

  return ( 
    <div className='absolute top-60 left-111'>{param.id} This is a course Detail page...</div>
  )
}

export default CourseDetail