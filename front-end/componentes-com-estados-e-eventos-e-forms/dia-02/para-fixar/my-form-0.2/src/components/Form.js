// Faça todos os seus elementos componentes do formulário, criado nos exercícios anteriores, ficarem 100% controlados. Para isso, construa um event handler genérico para lidar com eles.

// Acrescente no seu formulário um input do tipo checkbox, e garanta que seu event handler esteja tratando este caso corretamente.

// Na documentação de React (primeiro link da seção de Recursos Adicionais!), busque sobre os formulários e faça a leitura de como se deve adicionar um input para arquivos. Feito isso, acrescente um input ao seu formulário.

// Encapsule alguns dos seus campos num fieldset. Para isso, primeiro entenda como ele funciona lendo a documentação.


import React from "react";

class Form extends React.Component{
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      textAreaInput: '',
      inputValueText: '',
      inputValuePass: '',
      check: 'false',
    }
  }

  handleChange( { target } ) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

render() {
  const { textAreaInput, inputValueText, inputValuePass, checked } = this.state;
  return(
    <div>
      <select></select>
      <input type='text' name='inputValueText' value={ inputValueText } onChange={this.handleChange} ></input>
      <input type='password' name='inputValuePass' value={ inputValuePass } onChange={this.handleChange} ></input>
      <input type='checkbox' name='check' value={ checked } onChange={this.handleChange} ></input>
      <textarea name='textAreaInput' value={ textAreaInput } onChange={this.handleChange} ></textarea>
    </div>
  )
}
}

export default Form;