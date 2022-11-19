import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef(); // Ref nos permite leer los valores de los input con react.

    obtenerDatos = (e) => {
        // evitar que cuando le de buscar, muestre todo el texto en la parte superior de la url.       
        e.preventDefault();
        //Tomamos el valor del input
        const termino = this.busquedaRef.current.value;
        //Lo enviamos al componente pricipal,
        this.props.datosBusqueda(termino);
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className='row'>                    
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type="text" className='form-control form-control-lg' placeholder='Busca tu imagen. Ejemplo: Gatos'/>
                    </div>                             
                    <div className='form-group col-md-4'>
                        <input type="submit" className='btn btn-lg btn-danger bnt-block' value={'Buscar...'}/>
                    </div>
                </div> 
            </form>
        );
    }
}
export default Buscador;