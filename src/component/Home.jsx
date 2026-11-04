import React, { useEffect, useState } from 'react'
import '../component/Home.css'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [ searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(()=> {
        console.log("inside use effect")
        if(pasteId){
            const paste = allPastes.find((p)=> p._id===pasteId);
            console.log("page found")
          
            setTitle(paste.title); 
            setValue(paste.content);
          
         
        }
        
    },[pasteId])

    function createPaste(){
        const paste = {
            title : title,
            content : value,
            _id: pasteId || 
              Date.now().toLocaleString(36),
            createdAt : new Date().toLocaleString("en-IN"),
        }


        if(pasteId){
            //update
            dispatch(updateToPastes(paste));

        }
        else{
           // create
           dispatch(addToPastes(paste));
        }
       // after creation or updation 
       setTitle('');
       setValue('');
       setSearchParams('');


    }

    

  return (
   <div>
     <div>
      <input className='HomeD' type="text" placeholder='Enter Title Here....'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}
      />

      <button className='btn' onClick={createPaste}>
        {
            pasteId ? "Update Paste" : "Create My Paste"
        }
        </button>

    </div>

    <div>
        <textarea className='textArea'
           value={value}
           placeholder='Write Your Content Here.....'
           onChange={(e) => setValue(e.target.value)}
           rows={20}
        
        
        />

    </div>
   </div>

   
  )
}

export default Home
