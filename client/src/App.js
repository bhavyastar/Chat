import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { Cookies } from 'universal-cookie';
import ChannelListContainer from   './components/ChannelListContainer';
import ChannelContainer from './components/ChannelContainer';


const apikey = 'va7qgce3cmjf';
const Client = StreamChat.getInstance(apikey);

const authToken = false;

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

export default App;

