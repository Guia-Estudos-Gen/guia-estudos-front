function JsBase() {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  return (
    <div className="w-full pt-8">
      <div id="chat" className="w-2/3 mx-auto border-2 rounded-4xl p-6">
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
              {hour}:{minute}
            </time>
          </div>
          <div className="chat-bubble">
            Conteúdo recomendado para voltar ao básico de Javascript
          </div>
          <div className="chat-footer opacity-50">Enviado</div>
        </div>

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
              {hour}:{minute}
            </time>
          </div>
          <div className="chat-bubble">
            Me ensine, o que eu preciso ver denovo?
          </div>
          <div className="chat-footer opacity-50">
            Visto às {hour}:{minute}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JsBase;
