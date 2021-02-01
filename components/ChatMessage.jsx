export default function ChatMessage (props) {
    const { text, uid } = props.message;
    const messageClass = uid === props.currentUserUid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>
    )
}