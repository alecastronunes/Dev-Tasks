export default function App() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="flex justify-center items-center my-10">
        <h1 className="font-bold text-3xl">Dev-Task</h1>
      </div>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 border-gray-400 rounded-lg h-9 px-3 outline-0"
          type="text"
          placeholder="Digite aqui uma tarefa..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg cursor-pointer">
          Adicionar
        </button>
      </section>
      <h1 className="font-medium text-center mt-6 text-2xl mb-4">
        Minhas tarefas
      </h1>
      <div className=" p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center">
        <ul className=" w-full ">
          <li className="bg-white max-w-2xl flex w-full items-center justify-between min-h-14 px-4 py-3 rounded-lg mb-4">
            <span className="min-w-0 flex-1 wrap pr-4">
              Praticar programação
            </span>

            <div className="flex shrink-0 gap-2">
              <button className="bg-red-500 h-8 px-5 rounded-lg text-white font-semibold cursor-pointer">
                Excluir
              </button>
              <button className="bg-red-500 h-8 px-4 rounded-lg text-white font-semibold cursor-pointer">
                Editar
              </button>
              <button className="bg-red-500 h-8 px-5 rounded-lg text-white font-semibold cursor-pointer">
                Feito
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
