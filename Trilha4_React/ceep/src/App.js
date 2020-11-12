import React, { Component } from 'react';
import ListaDeNotas from "./componentes/listaDeNotas/listaDeNotas";
import FormularioCadastro from "./componentes/formularioCadastro/formularioCadastro";
import "./App.css"


class App extends Component{
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>      
      </section>
    );
  }
}
//react  --> lib
//React  --> ecossistema
export default App;
