import React, {Component} from 'react';
class Contactenos extends Component{
    render(){
        return(
            <div className="contactenos container-fluid bg-white py-4" id="contactenos">
                <div className="container text-center">
                    <h1 className="py-sm-4">CONTÁCTENOS</h1>
                    <form>
                        <div className="input-group input-group-lg">
                            <input type="text" className="form-control mb-3 mr-2 form-control-lg"
                                   placeholder="Nombre"/>
                            <input type="text" className="form-control mb-3 ml-2 form-control-lg"
                                   placeholder="Apellido"/>
                        </div>
                        <div className="input-group input-group-lg">
                            <input type="text" className="form-control mb-3 mr-2 form-control-lg"
                                   placeholder="Móvil"/>
                            <input type="text" className="form-control mb-3 ml-2 form-control-lg"
                                   placeholder="Correo Electrónico"/>
                        </div>
                        <textarea className="form-control" rows="6" placeholder="Escribe aquí tu mensaje"/>
                        <input className="btn btn-dark my-4 btn-lg py-3 text-uppercase" value="Enviar"/>
                    </form>
                </div>
            </div>
        );
    }
}
export default Contactenos;
