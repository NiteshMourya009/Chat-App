import { useSocketContext } from '../../context/SocketContext';
import useConversation from '../../zustand/useConversation'

export const Conversation = ({conversation , lastIdx , emoji}) => {
  const {selectedConversation , setSelectedConversation} = useConversation() ;

  const  isSelected = selectedConversation?._id === conversation._id ;
  const {onlineUsers} = useSocketContext() ;
  const isOnline = onlineUsers.includes(conversation._id) 

  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={ () => setSelectedConversation(conversation)}
      >
           <div className={`avatar ${isOnline} ? "online" : "" `}>
              <div className='w-12 rounded-full'>
                <img src= {conversation.profilePic} alt='user avatar'/>
              </div>
           </div>
    
           <div className='flex flex-col flex-1'>   
              <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
              </div>
           </div>
        </div>

        { !lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  
    
  )
}




// import React from 'react'

// export const Conversation = () => {
//   return (
//     <>
//        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer'>
//            <div className='avatar online'>
//               <div className='w-12 rounded-full'>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDy6RCP4XURksnhjmITnhHh3bA-m0thy_d3B-JDNM-KY1wNNnSQSL7ZIJxyvAAIKLTX4U&usqp=CAU" alt='user avatar'/>
//               </div>
//            </div>
    
//            <div className='flex flex-col flex-1'>   
//               <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'>John Doe</p>
//                 <span className='text-xl'>🎃</span>
//               </div>
//            </div>
//         </div>

//         <div className='divider my-0 py-0 h-1'></div>
//     </>
  
    
//   )
// }



