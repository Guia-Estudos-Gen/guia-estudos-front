import ChatSite from "../../ui/ChatSite";
import ChatUser from "../../ui/ChatUser";

function JsBase() {
  return (
    <div className="w-full pt-8">
      <div id="chat" className="w-2/3 mx-auto border-2 rounded-4xl p-6">
        <ChatSite texto={'Em que eu posso te ajudar, meu grande?'} hora="03:45" />
        <ChatUser texto={'Me ensine, o que eu preciso ver denovo?'} hora="03:45" />        
        <ChatSite texto={'Claro, vamos lá... aqui tem um guia rápido do que estudar em JavaScript'} hora="03:46" />
      </div>
    </div>
  );
}

export default JsBase;
