import React, {Component} from "react";
import "./style.css"

class Form extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _handleMudaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return (
            <form className="form-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
          );
    }
}

export default Form;