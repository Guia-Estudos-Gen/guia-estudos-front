interface ChatUserProps {
  texto: string,
  hora: string
}

function ChatUser({texto, hora}: ChatUserProps) {
  return (
    <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">
              {hora}
            </time>
          </div>
          <div className="chat-bubble">
            {texto}
          </div>
          <div className="chat-footer opacity-50">
            Visto às {hora}
          </div>
        </div>
  )
}

export default ChatUser