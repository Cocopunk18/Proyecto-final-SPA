import React, {Component} from 'react';
import Buscador from './componentes/Buscador';

class App extends Component {
  render() {
    return (
      <div className='app container'>
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador 
            mensaje="Buscador"
          />

        </div>
      </div>
    );
  }
}
export default App;


