import React, {Component} from 'react';
import Buscador from './componentes/Buscador';
import Resultado  from './componentes/Resultados';
class App extends Component {
  //creamos el objeto state
  state = {
    termino : '', 
    imagenes : []
  }

  consultarApi = () => {
    const termino=this.state.termino;
    const url = `https://pixabay.com/api/?key=30715967-5ba022496f0ac17e98129ea0d&q=${termino}}&image_type=photo&pretty=true`;
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) => {
      this.setState({
        termino
      }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className='app container'>
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />  
          <Resultado
           imagenes={this.state.imagenes}
          />      
        </div>
      </div>
    );
  }
}
export default App;


