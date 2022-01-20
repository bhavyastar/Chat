import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer}  from './components';


const apikey = 'va7qgce3cmjf';
const Client = StreamChat.getInstance(apikey);
const App = () => {
  return (
    <div className="container_1">
     <Chat client={Client} theme="team light">
     <ChannelListContainer 
       
      />
      <ChannelContainer 

      />
      </Chat>
    </div>
  )
}

export default App

