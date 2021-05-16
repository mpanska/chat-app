import { useState } from "react"
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const authObject = {
            'Project-ID': 'b02dc551-0a42-41c8-9695-1e1a516fc845',
            'User-Name': username,
            'User-Secret': password
        }

        try{
            await axios.get(
                'https://api.chatengine.io/chats',
                {headers: authObject}
            )
            // if credenrials are correct:
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            // reload to store in local storage to render differently
            window.location.reload()
        }
        catch(error){
            setError('Invalid credentials.')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    Chat app
                </h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required/>
                    <div allign="center">
                        <button type="submit" className="button">
                            <span>Log in</span>
                        </button>
                    </div>

                    <h2 className="error">
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}
export default Login