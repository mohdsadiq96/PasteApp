import React, { useEffect, useState } from 'react'
import '../component/Home.css'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {
    const {id}= useParams();
    const allPastes = useSelector((state) => 
    state.paste.pastes);

    const paste = allPastes.filter((p)=>
    p._id===id);
    console.log('Final Paste ', paste)


  return (

    
  
     <div>
     <div>
      <input className='HomeD' type="text" placeholder='Enter Title Here'
      value={paste.title}
      onChange={(e)=> setTitle(e.target.value)}
      />
      <br />
      <br />

      {/* <button className='btn' onClick={createPaste}>
        {
            pasteId ? "Update Paste" : "Create My Paste"
        }
        </button> */}

    </div>

    <div>
        <textarea className='textArea'
           value={paste.content}
           placeholder='Enter Content Here'
           onChange={(e) => setValue(e.target.value)}
           rows={20}
        
        
        />

    </div>
   </div>
  )
}

export default ViewPaste
