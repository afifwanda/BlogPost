import React from 'react';
import moment from 'moment';

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
          <div className='comment-date'>{moment(props.date).format('MMMM Do YYYY hh:mm')}</div>
          <div className='content'>{props.message}</div>
          <div className='point-box'>
            <div className='point'>{props.point} Point</div>
            <div className='vote-box upvote'>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
            <div className='vote-box downvote'>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
