import React, { Component } from 'react';
import ListaDeNotas from "./componentes/listaDeNotas";
import FormularioCadastro from "./componentes/formularioCadastro";


class App extends Component{
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>      
      </section>
    );
  }
}
//react  --> lib
//React  --> ecossistema
export default App;
