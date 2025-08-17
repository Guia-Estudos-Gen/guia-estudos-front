function Modal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn border-secondary w-1/2 mx-auto mt-10"
        onClick={() =>
          (
            document.getElementById('my_modal_2') as HTMLDialogElement
          )?.showModal()
        }
      >
        Recadinho importante
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col items-center border-2">
          <h3 className="font-bold text-lg">Hello World!</h3>
          <p className="py-4">Parabéns, você caiu na pegadinha do recado importante</p>
          <p className="py-4">Não sai clicando em tudo quanto é coisa não... 👻</p>
        </div>
        <form method="dialog" className="modal-backdrop bg-secondary/30">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
