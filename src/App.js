import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import Login from './components/Login'

const App = () => {

    //if no one logged in:
    if(!localStorage.getItem('username')) return <Login/>

    return(
        <ChatEngine
            height="100vh"
            projectID="b02dc551-0a42-41c8-9695-1e1a516fc845"

            // the name of a currentlu logged user
            userName={localStorage.getItem('username')}
            // password:
            userSecret={localStorage.getItem('password')}

        />
    )

    
}
export default App