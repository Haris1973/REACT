import React from 'react'

function Card(props) {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
        <div key={props.idx}>
          <div className='h-50 w-54 bg-white rounded-xl overflow-hidden'>
            <img className='h-full w-full object-cover' src={props.elem.download_url}/>
          </div>
          <h3 className='text-bold'>Author: {props.elem.author}</h3>
        </div>    
      </a>    
    </div>
  )
}

export default Card