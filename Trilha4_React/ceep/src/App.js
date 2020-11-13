import React, { Component } from 'react';
import ListaDeNotas from "./componentes/listaDeNotas";
import FormularioCadastro from "./componentes/formularioCadastro";
import "./assets/App.css";
import "./assets/index.css";


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
