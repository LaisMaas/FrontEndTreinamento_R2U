import React from 'react';

import ListaDeNotas from "./componentes/listaDeNotas"

function App() {
  return (
    <section>
      <h1>Meu primeiro App react</h1>
      <form>
        <input type="text" placeholder="Titulo"></input>
        <textarea placeholder="Escreva sua tarefa..." ></textarea>

        <button>Salvar</button>
      </form>
      <ListaDeNotas />  
      
    </section>
  );
}
export default App;
