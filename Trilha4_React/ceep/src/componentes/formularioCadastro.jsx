import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Titulo"></input>
        <textarea placeholder="Escreva sua tarefa..."></textarea>

        <button>Salvar</button>
      </form>
    );
  }
}
export default FormularioCadastro;
