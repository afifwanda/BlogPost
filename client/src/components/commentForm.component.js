import React, {useState} from 'react';

import '../styles/home.style.css'

function CommentForm(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [comment,setComment] = useState("");
  

  return(
    <>
      <div className='comment-box'>
        <input type="text" 
        className='input-box' 
        placeholder='Nama' 
        onChange={(e)=>setName(e.target.value)}
        required />
        {name === "" ? <p>Wajib diisi</p> : <></>}
        <input type="email" 
        className='input-box' 
        placeholder='Email' 
        required 
        onChange={(e)=>setEmail(e.target.value)}
        />
        {email === "" ? <p>Format Email Salah</p> : <></>}
        <textarea 
        className='text-area' 
        placeholder='Pesan Anda' 
        required 
        onChange={(e)=>setComment(e.target.value)}
        />
        {comment === "" ? <p>Wajib diisi</p> : <></>}
        <div className='button-box'>
          <button className='button'>Submit</button>
          <button className='button'>Cancel</button>
        </div>
      </div>
    </>
  )
}

export default CommentForm
