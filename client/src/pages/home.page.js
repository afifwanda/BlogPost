import React from 'react';
import Navbar from '../components/navbar.component';

import '../styles/home.style.css'

function Home(){

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
        <div className='comments-title'>
          <div className='title-box'>
            <h1>Komentar</h1>
            <div className='horizontal-line' />
          </div>
        </div>
        <div className='comment'>
          <div className='avatar'></div>
          <div className='comment-content'>
            <div className='user'>Monica Gatzambide</div>
            <div className='comment-date'>12 Jan 1990</div>
            <div className='content'>Culpa quis ipsum eu dolor tempor duis ea sunt fugiat commodo ipsum.
            Nisi cillum commodo excepteur quis fugiat sint sint adipisicing culpa dolor aliqua.</div>
            <div className='point-box'>
              <div className='point'>4 Point</div>
              <div className='upvote'>UP</div>
              <div className='downvote'>Down</div>
            </div>
          </div>
        </div>
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
