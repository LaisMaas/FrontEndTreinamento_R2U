import React, { Component } from "react";
import CardNota from "./cardNota";

class ListaDeNotas extends Component {
  render() {
    return <ul>{Array.of("Trabalho", "Pessoal", "Estudos").map(categoria => {
      return (<li>
        <div>{categoria}</div>
        <CardNota />
      </li>);
    })}</ul>;    
  }
}
export default ListaDeNotas;