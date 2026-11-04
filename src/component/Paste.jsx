import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../component/Paste.css'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Calendar, CalendarDays, Copy, Eye,Pencil, Share2, Trash2 } from "lucide-react";
const Paste = () => {
    const pastes = useSelector(
        (state) => state.paste.pastes);
    console.log('pastes')

    const [searchTerm, setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const filteredData = pastes.filter(
        (Paste) => Paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));

    }
   const handleShare = async (paste) => {
    try {
        await navigator.share({
            title: paste.title,
            text: paste.content,
        });
        toast.success("Shared successfully!");
    } catch (error) {
        if (error.name !== "AbortError") {
            toast.error("Sharing failed!");
        }
    }
};




    return (
        <div>
            <input className='Search'
                type='Search'
                placeholder='Search Here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='all-paste'>
                    All Pastes
              
                </div>
                <div className='Main-paste-box'>
                     <div className='Card'>
                {
                    filteredData.length > 0 &&
                    filteredData.map(
                        (paste) => {
                            return (
                                <div className='subCard' key={paste?._id}>
                                    <div className='subCard-title'>
                                        {paste.title}
                                    </div>

                                    <div className='SubCard-content'>
                                        {paste.content}
                                    </div>
                                    
                                    <div className='Cardbtn'>
                                        <button className='edit-btn'>
                                            <a href={`/?pasteId=${paste?._id}`}>
                                            <Pencil size={20} />
                                            </a>
                                        </button>
                                        <button className='view-btn'>
                                            <a href={`/pastes/${paste?._id}`}>
                                           <Eye size={20} />
                                            </a>
                                        </button>
                                        <button onClick={() => handleDelete(paste?._id)} className='delete-btn'>
                                            <Trash2 size={20} />
                                        </button>
                                        <button onClick={() => {
                                            navigator.clipboard.writeText
                                                (paste?.content)
                                            toast.success('copy to clipboard')
                                        }} className='copy-btn'>
                                             <Copy size={20} />
                                        </button>
                                        <button className='share-btn' onClick={()=> { handleShare(paste)
                                            toast.success('Shared data');
                                        }}>

                                           <Share2 size={20} />
                                        </button>
                                        
                                         {/* <div className='calander-btn'>
                                            <br />
                                
                                                <CalendarDays size={20} />
                                                 {paste.createdAt}
                                    </div> */}
                                    <div/>
                                   
                                      


                                    </div>

                                </div>

                            )
                        }
                    )
                }


            </div>
                </div>
              

            

           
        </div>
    )
}

export default Paste
