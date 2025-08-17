
interface ChatSiteProps {
  texto: string,
  hora: string
}

function ChatSite({texto, hora}: ChatSiteProps) {
  return (
    <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">
              {hora}
            </time>
          </div>
          <div className="chat-bubble">
            {texto}
          </div>
          <div className="chat-footer opacity-50">Enviado</div>
        </div>
  )
}

export default ChatSite