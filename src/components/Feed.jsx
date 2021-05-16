import MessageForm from './MessageForm'
import Message from './Message'
import OthersMessage from './OthersMessage'

const Feed = (props) => {
    const { chats, activeChat, userName, messages } = props

    // find a current chat: if chats exist - find chats and the active one
    const chat = chats && chats[activeChat]

    // fetch all the messages
    const renderMessages = () => {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]

            // if there are messages, find the lats one
            const lastMsgKey = index === 0 ? null : keys[index - 1]
            const isMyMsg = userName === message.sender.username
        
            return(
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className="message-block">
                        {
                            isMyMsg
                            ? <Message/>
                            : <OthersMessage/>
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMsg ? '18px' : '0px', marginLeft: isMyMsg ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    if(!chat) return 'Loading...'

    return(
        <div className="feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>
            </div>

            {renderMessages()}
            <div style={{height : '100px'}}/>

            {/* a form to send messages */}
            <div className="message-form-container">
                <MessageForm {...props} chatID={activeChat}/>
            </div>
        </div>
    )
}
export default Feed