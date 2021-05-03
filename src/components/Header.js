import React, {Component} from 'react';
import Image from '../assets/image/logoPortobelo.png';
import Menu from "./Menu";
import $ from "jquery";

class Header extends Component {
    componentDidMount() {
        $(".mostrarBloqueReservas").click(function(){

            $(".formReservas").slideToggle("fast");

            $(".menu").slideUp('fast');

            if($(".mostrarBloqueReservas").attr("modo") == "abajo"){

                $(".mostrarBloqueReservas").attr("modo", "arriba");

                $(".flechaReserva").removeClass("fa-caret-up");

                $(".flechaReserva").addClass("fa-caret-down");

            }else{

                $(".mostrarBloqueReservas").attr("modo", "abajo");

                $(".flechaReserva").removeClass("fa-caret-down");

                $(".flechaReserva").addClass("fa-caret-up");

            }

            // posicionBloqueReservas();
        })

    }
    render() {
        return (
            <React.Fragment>
                <header className="container-fluid p-0 bg-white">
                    <div className="container p-0">
                        <div className="grid-container py-2">
                            {/*LOGO*/}
                            <div className="grid-item">
                                <a href="index.html">
                                    <img src={Image} className="img-fluid" alt="Logo"/>
                                </a>
                            </div>
                            <div className="grid-item d-none d-lg-block"/>
                            {/*CAMPANA Y RESERVA*/}
                            <div className="grid-item d-none d-lg-block bloqueReservas">
                                <div className="py-2 campana-y-reserva mostrarBloqueReservas" modo="abajo">
                                    <i className="fas fa-concierge-bell lead mx-2"/>
                                    <i className="fas fa-caret-up lead mx-2 flechaReserva"/>
                                </div>
                                {/*FORMULARIO DE RESERVAS*/}
                                <div className="formReservas py-1 py-lg-2 px-4">
                                    <div className="form-group my-4">
                                        <select className="form-control form-control-lg">
                                            <option>Tipo de habitación</option>
                                            <option>Suite</option>
                                            <option>Especial</option>
                                            <option>Standar</option>
                                        </select>
                                    </div>
                                    <div className="form-group my-4">
                                        <select className="form-control form-control-lg">
                                            <option>Temática de habitación</option>
                                            <option>Oriental</option>
                                            <option>Contemporánea</option>
                                            <option>Africana</option>
                                            <option>Clásica</option>
                                            <option>Retro</option>
                                        </select>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 input-group input-group-lg pr-1">
                                            <input type="text" className="form-control datepicker entrada"
                                                   placeholder="Entrada"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text p-2">
                                                <i className="far fa-calendar-alt small text-gray-dark"/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 input-group input-group-lg pl-1">
                                            <input type="text" className="form-control datepicker salida"
                                                   placeholder="Salida"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text p-2">
                                                <i className="far fa-calendar-alt small text-gray-dark"/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="button" className="btn btn-block btn-lg my-4 text-white"
                                           value="Ver disponibilidad"/>
                                </div>
                            </div>
                            {/*INGRESO DE USUARIOS*/}
                            <div className="grid-item d-none d-lg-block mt-2">
                                <a href="#modalIngreso" data-toggle="modal"><i className="fas fa-user"/></a>
                            </div>
                            {/*SELECCIÓN DE IDIOMA*/}
                            <div className="grid-item d-none d-lg-block mt-1 idiomas">
                                <span
                                    className="border border-info float-left p-1 bg-info text-white idiomaEs">ES</span>
                                <span
                                    className="border border-info float-left p-1 bg-white text-dark idiomaEn">EN</span>
                            </div>
                            {/*MENÚ HAMBURGUESA*/}
                            <div className="grid-item mt-1 mt-sm-3 mt-md-4 mt-lg-2 botonMenu">
                                <i className="fas fa-bars lead"/>
                            </div>
                        </div>

                    </div>

                </header>
                </React.Fragment>
        );
    }
}

export default Header;
