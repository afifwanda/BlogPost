import React, {useEffect} from 'react';
import Navbar from '../components/navbar.component';
import Comment from '../components/comment.component';
import CommentForm from '../components/commentForm.component';
import {useDispatch,useSelector} from 'react-redux';
import {getData} from '../store/action.js';

import '../styles/home.style.css';

function Home(){

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])

  const listComment = useSelector(state=>state.reducer.comments)
  console.log(listComment,'ini comment')

  const title = [
    'Ipsum voluptate voluptate ipsum',
    'id est dolore ex ex non officia veniam',
    'Incididunt dolor aliquip incididunt occaecat',
    'consectetur culpa voluptate minim nostrud',
    'Mollit sunt sit amet aliquip nisi'
  ]
  
  return(
    <>
    <Navbar />
    <body className='home'>
      <section className='homeSection'>
        <div className='article'>
          <h1>Ipsum reprehenderit laboris commodo consequat.</h1>
          <p>Lorem ex minim pariatur voluptate in consequat dolore officia voluptate sunt. 
            Labore aute velit esse esse Lorem anim laboris. Laboris id nisi pariatur do quis dolor incididunt. 
            Mollit sunt sit amet aliquip nisi mollit eiusmod commodo ea. Nulla elit 
            sint consectetur culpa voluptate minim nostrud.
          </p>
        </div>
        <div className='section-title'>
          <div className='title-box'>
            <h1>Komentar</h1>
            <div className='horizontal-line' />
          </div>
        </div>
        {
          listComment.map(element => {
            return ( <>
              <Comment
              key = {element.id}
              author = {element.author}
              avatar = {element.avatar}
              date = {element.date}
              message = {element.message}
              point = {element.point}
              />
                { element.replies.map(replies => 
                <div className='replies-container'>
                  <Comment
                  key = {replies.id}
                  author = {replies.author}
                  avatar = {replies.avatar}
                  date = {replies.date}
                  message = {replies.message}
                  point = {replies.point}
                  />
                </div>)}
              </>
            )
          })
        }
        <div className='section-title'>
          <div className='title-box'>
            <h1>Tambahkan Komentar</h1>
            <div className='horizontal-line' />
          </div>
        </div>
        <CommentForm />
      </section>
      <aside className='asideSection'>
        <h2>Diskusi 5 Teratas</h2>
        {title.map((element,index)=>{
          return <div className='title-dummy'>
            <div className='number-box'>{index+1}</div>
            <h3>{element}</h3>
          </div>
        })}
      </aside>
    </body>
    </>
  )
}

export default Home
