import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input type="text"
          placeholder="Título"
        className="from-cadastro_input"/>
        
        <textarea
          rows={15}          
          placeholder="Escreva sua tarefa..."
          className="form-cadastro_input" />
        
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
