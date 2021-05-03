import React, {Component} from 'react';

class ModalRegistro extends Component {
    render() {
        return (
            <div className="modal" id="modalRegistro">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-info text-white">
                            <h4 className="modal-title">Registarse</h4>
                            <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            {/*INGRESO CON REDES SOCIALES*/}
                            <div className="d-flex">
                                <div className="px-2 flex-fill">
                                    <p className="p-2 bg-primary text-center text-white">
                                        <i className="fab fa-facebook"/>
                                        Ingreso con Facebook
                                    </p>
                                </div>
                                <div className="px-2 flex-fill">
                                    <p className="p-2 bg-danger text-center text-white">
                                        <i className="fab fa-google"/>
                                        Ingreso con Google
                                    </p>
                                </div>
                            </div>
                            {/*REGISTRO DIRECTO*/}
                            <hr className="mt-0"/>
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="far fa-user"/>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nombre"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="far fa-envelope"/>
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                        <i className="fas fa-unlock-alt"/>
                                        </span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Contraseña"/>
                                </div>
                                <input type="submit" className="btn btn-dark btn-block" value="Registrarse"/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            ¿Ya tienes una cuenta registrada? |
                            <strong>
                                <a href="#modalIngreso" data-toggle="modal" data-dismiss="modal">
                                    Ingresar
                                </a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalRegistro;
