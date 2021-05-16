import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import './App.css'
import Feed from './components/Feed'

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="b02dc551-0a42-41c8-9695-1e1a516fc845"

            // the name of a currentlu logged user
            userName="chatAdmin"
            // password:
            userSecret="123123"
            //render new custom component
            renderChatFeed={(chatAppProps) => <Feed {...chatAppProps}/>}
        />
    )

    
}
export default App