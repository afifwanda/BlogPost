import React from 'react';

import '../styles/home.style.css'

function Comment(props){

  
  return(
    <>
      <div className='comment'>
        <div className='avatar'>
          <img className='comment-image'alt='img' src={props.avatar} />
        </div>
        <div className='comment-content'>
          <div className='user'>{props.author}</div>
          <div className='comment-date'>{props.date}</div>
          <div className='content'>{props.message}</div>
          <div className='point-box'>
            <div className='point'>{props.point} Point</div>
            <div className='upvote'>UP</div>
            <div className='downvote'>Down</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
