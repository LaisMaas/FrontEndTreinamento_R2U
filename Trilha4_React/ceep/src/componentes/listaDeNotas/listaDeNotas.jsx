import React, { Component } from "react";
import CardNota from "../cardNota/cardNota";


class ListaDeNotas extends Component {
  render() {
    return <ul>
      {Array.of("Trabalho", "Pessoal", "Estudos").map((categoria, index) => {
      return (
      <li key={index}>        
        <CardNota />
      </li>
      );
    })}</ul>;    
  }
}
export default ListaDeNotas;