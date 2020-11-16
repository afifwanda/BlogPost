import React, {useState} from 'react';
import moment from 'moment';
import {useDispatch} from 'react-redux';

import '../styles/home.style.css'

function Comment(props){
  const [point,setPoint] = useState(props.point)
  const [vote,setVote] = useState(true)

  const handleUpVote = () =>{
    setPoint(Number(point) + 1)
    setVote(false)
  }

  const handleDownVote = () =>{
    setPoint(Number(point) - 1)
    setVote(false)
  }

  
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
            <div className='point'>{point} Point</div>
            {vote ?<div className='upvote vote-box '
              onClick={handleUpVote}
            >
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div> :
            <div className='upvote'>
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div> 
            }
            {vote?<div className='downvote vote-box'
              onClick={handleDownVote}>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </div> :
            <div className='downvote'>
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Comment
