import React, {Component} from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {
  //creamos el objeto state
  state = {
    termino : 'gatos'
  }

  datosBusqueda = (termino) => {
    this.setState({termino})
  }

  render() {
    return (
      <div className='app container'>
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
          {this.state.termino}
        </div>
      </div>
    );
  }
}
export default App;


