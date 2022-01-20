import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
// import ChatIcon from '../assets/chat.png';
// import LogoutIcon from '../assets/logout.png';
 const SideBar = () => (
         <div className="channel-list-sidebar">
               <div class Name="channel-list-sidebar-icon1">
                      <div className="icon1-inner">
                      hii
                               {/* <img src= {ChatIcon} alt="chat" width="30" /> */}
                      </div>
                </div>
                <div class Name="channel-list-sidebar-icon2">
                      <div className="icon2-inner">
                      yellow
                               {/* <img src= {LogoutIcon} alt="chat" width="30" /> */}
                      </div>
                </div>
          </div>
);
 const CompanyHeader = () => (
        <div className= "channel-list-header">
              <p className="channel-list-header-text">Chit chat </p>
        </div>
 )
const ChannelListContainer = () => {
     return (
        <>
                <SideBar />
                <div className="channel-list_list_wrapper">
                      <CompanyHeader />
                      <ChannelSearch />
                      <ChannelList
                               filters={{}}
                               channelRenderFilterFn={}
                               List={(listProps) => (
                                     <TeamChannelList 
                                              {...listProps}
                                      />
                               )} 
                       />
                </div>
        </>
    );
}

export default ChannelListContainer;
