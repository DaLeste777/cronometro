import React, {Component} from 'react';
import './style.css';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botao: 'Vai'
        };

        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai(){
        let state = this.state;

        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'Vai';
        }else {

            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            },100);
            state.botao = 'Pausar';
        }
        this.setState(state);
    }


    limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'Vai';
        }

        let state = this.state;
        state.numero = 0;
        state.botao = 'Vai';
        this.setState(state);

    }
  render(){
    return(
        
      <div className="container">
          <img src={require('./assets/cronometro.png')} className="img"/>
          <a className="timer">{this.state.numero.toFixed(1)}</a>
          <div className="areaBtn">
              <a className="botao" onClick={this.vai}>{this.state.botao}</a>
              <a className="botao" onClick={this.limpar}>Limpar</a>
          </div>
      </div>

   
    );
  }
}

export default App;
/*
export default App;
import React, { Component } from 'react';


class App extends Component{
  render(){
    return(
      <div>
        <p>Olá mundo!</p>
        <img src={"require"('./assets/cronometro.png')}/>
      </div>

    )
  }
}*/


