import useGetConversations from '../../hooks/useGetConversations' ;
import { getRandomEmoji } from "../../utils/emojis";
import {Conversation} from "./Conversation"  ;

export const Conversations = () => {

  const {loading , conversations} = useGetConversations() ;
 
  return (
    <div className='p-2 flex flex-col overflow-auto'>
      { conversations.map((conversation , idx) => (
        <Conversation
          key= {conversation._id}
          conversation= {conversation}
          emoji ={getRandomEmoji()}
          lastIdx = {idx === conversations.length-1}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto"></span> : null}
    </div>
  ) ;
};


// import React from 'react'
// import { Conversation } from './Conversation'

// export const Conversations = () => {
//   return (
//     <div className='p-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>

//     </div>
//   )
// }

