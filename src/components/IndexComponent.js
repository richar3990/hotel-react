import React, {Component} from 'react';
import ImageLogo from '../assets/image/logoPortobelo.png';
import ImageBanner01 from '../assets/image/banner01.jpg';
import ImageBanner02 from '../assets/image/banner02.jpg';
import ImageBanner03 from '../assets/image/banner03.jpg';
import ImageBanner04 from '../assets/image/banner04.jpg';

import ImagePlanRomantico from '../assets/image/plan-romantico.png';
import ImagePlanAventura from '../assets/image/plan-aventura.png';
import ImagePlanSpa from '../assets/image/plan-spa.png';

import ImagePlanLunaMiel from '../assets/image/luna-de-miel.png';
import ImageHabitacion01 from '../assets/image/habitacion01.png';
import ImageHabitacion02 from '../assets/image/habitacion02.png';
import ImageHabitacion03 from '../assets/image/habitacion03.png';

import ImagePueblo01a from '../assets/image/pueblo01a.png';
import ImagePueblo01b from '../assets/image/pueblo01b.png';
import ImagePueblo02a from '../assets/image/pueblo02a.png';
import ImagePueblo02b from '../assets/image/pueblo02b.png';
import ImagePueblo03a from '../assets/image/pueblo03a.png';
import ImagePueblo03b from '../assets/image/pueblo03b.png';

import ImagePlato01 from '../assets/image/plato01.png';
import ImagePlato02 from '../assets/image/plato02.png';
import ImagePlato03 from '../assets/image/plato03.png';
import ImagePlato04 from '../assets/image/plato04.png';
import ImagePlato05 from '../assets/image/plato05.png';
import ImagePlato06 from '../assets/image/plato06.png';

import $ from 'jquery';
// import pluginMenu from '../assets/js/menu';



class IndexComponent extends Component{
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
            <div className="indexComponent">

                <header className="container-fluid p-0 bg-white">

                    <div className="container p-0">

                        <div className="grid-container py-2">

                            {/*LOGO*/}

                            <div className="grid-item">
                                <a href="index.html">
                                    <img src={ImageLogo} className="img-fluid"/>
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


                {/*MENÚ*/}

                <nav className="menu container-fluid p-0">

                    <ul className="nav nav-justified py-2">

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#planes">Planes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#habitaciones">Habitaciones</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#pueblo">El pueblo</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#restaurante">Restaurante</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#contactenos">Contáctenos</a>
                        </li>

                        <li className="nav-item">

                            <ul className="my-2 py-1">

                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-facebook-f text-white float-left mx-2"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-twitter text-white float-left mx-2"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-youtube text-white float-left mx-2"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" target="_blank">
                                        <i className="fab fa-instagram text-white float-left mx-2"/>
                                    </a>
                                </li>

                            </ul>

                        </li>

                    </ul>


                </nav>

                {/*MENÚ MÓVIL*/}
                <div className="menuMovil">

                    <div className="row">

                        <div className="col-6">

                            <a href="#modalIngreso" data-toggle="modal">
                                <i className="fas fa-user lead ml-3 mt-4"></i>
                            </a>

                        </div>

                        <div className="col-6">

                            <div className="float-right mr-3 mt-3 mr-sm-5 mt-sm-4">

                                <span
                                    className="border border-info float-left p-1 bg-info text-white idiomaEs">ES</span>
                                <span
                                    className="border border-info float-left p-1 bg-white text-dark idiomaEn">EN</span>

                            </div>

                        </div>

                    </div>

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

                                <input type="text" className="form-control datepicker entrada" placeholder="Entrada"/>

                                <div className="input-group-append">

                                    <span className="input-group-text p-2">
                                    <i className="far fa-calendar-alt small text-gray-dark"/>
                                    </span>

                                </div>

                            </div>

                            <div className="col-6 input-group input-group-lg pl-1">

                                <input type="text" className="form-control datepicker salida" placeholder="Salida"/>

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

                    <ul className="nav flex-column mt-4 pl-4 mb-5">

                        <li className="nav-item">
                            <a className="nav-link text-white my-2" href="#planesMovil">Planes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white my-2" href="#habitaciones">Habitaciones</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white my-2" href="#pueblo">Recorrido por el pueblo</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white my-2" href="#restaurante">Restaurante</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white my-2" href="#contactenos">Contáctenos</a>
                        </li>

                    </ul>

                </div>

                {/*BANNER*/}

                <div className="banner container-fluid p-0">

                    <div className="jd-slider fade-slider">

                        <div className="slide-inner">

                            <ul className="slide-area">

                                <li>
                                    <img src={ImageBanner01} width="100%"/>
                                </li>

                                <li>
                                    <img src={ImageBanner02} width="100%"/>
                                </li>

                                <li>
                                    <img src={ImageBanner03} width="100%"/>
                                </li>

                                <li>
                                    <img src={ImageBanner04} width="100%"/>
                                </li>

                            </ul>

                        </div>

                        <div className="controller d-none">

                            <a className="auto" href="#">

                                <i className="fas fa-play fa-xs"/>
                                <i className="fas fa-pause fa-xs"/>

                            </a>

                            <div className="indicate-area"/>

                        </div>

                        <div className="verMas text-center bg-white rounded-circle d-none d-lg-block" vinculo="#planes">

                            <i className="fas fa-chevron-down"/>

                        </div>

                    </div>

                </div>


                {/*PLANES*/}

                <div className="planes container-fluid bg-white p-0" id="planes">

                    <div className="container p-0">

                        <div className="grid-container">

                            <div className="grid-item">

                                <h1 className="text-center py-3 py-lg-5 tituloPlan"
                                    tituloPlan="BIENVENIDO">BIENVENIDO</h1>

                                <p className="text-muted text-left px-4 descripcionPlan"
                                   descripcionPlan="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti quidem minus voluptatibus repellendus error, excepturi quam, iste vitae tenetur fugiat possimus in. In iure cum facilis, saepe, libero accusantium.">Lorem
                                    ipsum dolor sit amet, consectetur adipisicing elit. Iure deleniti quidem minus
                                    voluptatibus repellendus error, excepturi quam, iste vitae tenetur fugiat possimus
                                    in.
                                    In iure cum facilis, saepe, libero accusantium.</p>

                            </div>

                            <div className="grid-item d-none d-lg-block" data-toggle="modal" data-target="#modalPlanes">

                                <figure className="text-center">

                                    <h1 descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas suscipit quis eligendi voluptatibus dolore libero quasi delectus odit impedit optio eius corporis cumque numquam aliquid repudiandae quisquam dolor explicabo, totam.">PLAN
                                        ROMÁNTICO</h1>

                                </figure>

                                <img src={ImagePlanRomantico} className="img-fluid" width="100%"/>


                            </div>

                            <div className="grid-item d-none d-lg-block" data-toggle="modal" data-target="#modalPlanes">

                                <figure className="text-center">

                                    <h1 descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dicta fugiat nihil amet officiis, atque molestiae velit, quod repudiandae asperiores illum accusantium ullam, necessitatibus excepturi inventore, mollitia est vitae impedit.">PLAN
                                        LUNA DE MIEL</h1>

                                </figure>

                                <img src={ImagePlanLunaMiel} className="img-fluid" width="100%"/>


                            </div>

                            <div className="grid-item d-none d-lg-block" data-toggle="modal" data-target="#modalPlanes">

                                <figure className="text-center">

                                    <h1 descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt blanditiis nulla expedita nostrum vero. Laborum repudiandae numquam mollitia earum natus ut delectus quas, iste unde doloribus suscipit qui, voluptate perspiciatis.">PLAN
                                        AVENTURA</h1>

                                </figure>

                                <img src={ImagePlanAventura} className="img-fluid" width="100%"/>

                            </div>

                            <div className="grid-item d-none d-lg-block" data-toggle="modal" data-target="#modalPlanes">

                                <figure className="text-center">

                                    <h1 descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam magni atque provident, quaerat libero harum possimus. Illum iure magni voluptate, quos amet! Ipsam, sit, sapiente. Cumque est officiis in!">PLAN
                                        SPA</h1>

                                </figure>

                                <img src={ImagePlanSpa} className="img-fluid" width="100%"/>

                            </div>

                        </div>

                    </div>

                </div>

                {/*HABITACIONES*/}

                <div className="habitaciones container-fluid bg-light" id="habitaciones">

                    <div className="container">

                        <h1 className="pt-4 text-center">HABITACIONES</h1>

                        <div className="row p-4 text-center">

                            <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">

                                <a href="habitaciones.html">

                                    <figure className="text-center">

                                        <img src={ImageHabitacion01} className="img-fluid" width="100%"/>

                                        <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                                        <h3 className="py-2 text-gray-dark mb-0">DESDE $300 USD</h3>

                                        <h5 className="py-2 text-gray-dark border">Ver detalles <i
                                            className="fas fa-chevron-right ml-2"/></h5>

                                        <h1 className="text-white p-3 mx-auto w-50 lead"
                                            style={{background: '#847059'}}>SUITE</h1>

                                    </figure>

                                </a>

                            </div>

                            <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">

                                <a href="habitaciones.html">

                                    <figure className="text-center">

                                        <img src={ImageHabitacion02} className="img-fluid" width="100%"/>

                                        <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                                        <h3 className="py-2 text-gray-dark mb-0">DESDE $200 USD</h3>

                                        <h5 className="py-2 text-gray-dark border">Ver detalles <i
                                            className="fas fa-chevron-right ml-2"/></h5>

                                        <h1 className="text-white p-3 mx-auto w-50 lead"
                                            style={{background: '#197DB1'}}>ESPECIAL</h1>

                                    </figure>

                                </a>

                            </div>

                            <div className="col-12 col-lg-4 pb-3 px-0 px-lg-3">

                                <a href="habitaciones.html">

                                    <figure className="text-center">

                                        <img src={ImageHabitacion03} className="img-fluid" width="100%"/>

                                        <p className="small py-4 mb-0">Lorem ipsum dolor sit amet</p>

                                        <h3 className="py-2 text-gray-dark mb-0">DESDE $150 USD</h3>

                                        <h5 className="py-2 text-gray-dark border">Ver detalles <i
                                            className="fas fa-chevron-right ml-2"/></h5>

                                        <h1 className="text-white p-3 mx-auto w-50 lead"
                                            style={{background: '#2F7D84'}}>STANDAR</h1>

                                    </figure>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                {/*PLANES MÓVIL*/}

                <div className="d-block d-lg-none planesMovil jd-slider bg-white" id="planesMovil">

                    <h1 className="text-center py-3">PLANES</h1>

                    <div className="slide-inner">

                        <ul className="slide-area">

                            <li>

                                <a href="#modalPlanes" data-toggle="modal"
                                   descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas suscipit quis eligendi voluptatibus dolore libero quasi delectus odit impedit optio eius corporis cumque numquam aliquid repudiandae quisquam dolor explicabo, totam.">

                                    <img src={ImagePlanRomantico}/>
                                    <h6 className="py-2 text-center">ROMÁNTICO</h6>

                                </a>

                            </li>

                            <li>

                                <a href="#modalPlanes" data-toggle="modal"
                                   descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dicta fugiat nihil amet officiis, atque molestiae velit, quod repudiandae asperiores illum accusantium ullam, necessitatibus excepturi inventore, mollitia est vitae impedit.">
                                    <img src={ImagePlanLunaMiel}/>
                                    <h6 className="py-2 text-center">LUNA DE MIEL</h6>
                                </a>

                            </li>

                            <li>

                                <a href="#modalPlanes" data-toggle="modal"
                                   descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt blanditiis nulla expedita nostrum vero. Laborum repudiandae numquam mollitia earum natus ut delectus quas, iste unde doloribus suscipit qui, voluptate perspiciatis.">
                                    <img src={ImagePlanAventura}/>
                                    <h6 className="py-2 text-center">AVENTURA</h6>
                                </a>

                            </li>

                            <li>

                                <a href="#modalPlanes" data-toggle="modal"
                                   descripcion="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quibusdam magni atque provident, quaerat libero harum possimus. Illum iure magni voluptate, quos amet! Ipsam, sit, sapiente. Cumque est officiis in!">
                                    <img src={ImagePlanSpa}/>
                                    <h6 className="py-2 text-center">SPA</h6>
                                </a>

                            </li>


                        </ul>

                        <a className="prev" href="#">
                            <i className="fas fa-angle-left text-muted"/>
                        </a>

                        <a className="next" href="#">
                            <i className="fas fa-angle-right text-muted"/>
                        </a>

                    </div>

                    <div className="controller">

                        <div className="indicate-area"/>

                    </div>

                </div>

                {/*RECORRIDO POR EL PUEBLO*/}

                <div className="recorridoPueblo container-fluid bg-white pb-5" id="pueblo">

                    <div className="container">

                        <h1 className="pt-5 text-center">RECORRIDO POR EL PUEBLO</h1>

                        <div className="jd-slider slidePueblo">

                            <div className="slide-inner">

                                <ul className="slide-area">

                                    <li>

                                        <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">

                                            <div className="grid-item">

                                                <img src={ImagePueblo01a} className="img-fluid" width="100%"/>

                                            </div>

                                            <div className="grid-item">

                                                <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                                                <p className="small p-3">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Explicabo velit quis iusto magnam cupiditate dolorum
                                                    repudiandae
                                                    tempore cum minus eos a iure, officiis, eius, consequuntur unde
                                                    nulla,
                                                    enim quibusdam beatae.</p>

                                            </div>

                                            <div className="grid-item d-none d-lg-block">

                                                <img src={ImagePueblo01b} className="img-fluid" width="100%"/>

                                            </div>

                                        </div>

                                    </li>

                                    <li>

                                        <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">

                                            <div className="grid-item">

                                                <img src={ImagePueblo02a} className="img-fluid" width="100%"/>

                                            </div>

                                            <div className="grid-item">

                                                <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                                                <p className="small p-3">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Explicabo velit quis iusto magnam cupiditate dolorum
                                                    repudiandae
                                                    tempore cum minus eos a iure, officiis, eius, consequuntur unde
                                                    nulla,
                                                    enim quibusdam beatae.</p>

                                            </div>

                                            <div className="grid-item d-none d-lg-block">

                                                <img src={ImagePueblo02b} className="img-fluid" width="100%"/>

                                            </div>

                                        </div>

                                    </li>

                                    <li>

                                        <div className="grid-container pt-4 pb-1 pb-lg-3 px-0 px-lg-5">

                                            <div className="grid-item">

                                                <img src={ImagePueblo03a} className="img-fluid" width="100%"/>

                                            </div>

                                            <div className="grid-item">

                                                <h1 className="mt-4 mb-0 my-lg-2">LOREM IPSUM</h1>

                                                <p className="small p-3">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing
                                                    elit. Explicabo velit quis iusto magnam cupiditate dolorum
                                                    repudiandae
                                                    tempore cum minus eos a iure, officiis, eius, consequuntur unde
                                                    nulla,
                                                    enim quibusdam beatae.</p>

                                            </div>

                                            <div className="grid-item d-none d-lg-block">

                                                <img src={ImagePueblo03b} className="img-fluid" width="100%"/>

                                            </div>

                                        </div>

                                    </li>

                                </ul>

                            </div>

                            <a className="d-none d-md-block prev" href="#">
                                <i className="fas fa-angle-left fa-2x" style={{color: '#3E92BD'}}/>
                            </a>

                            <a className="d-none d-md-block next" href="#">
                                <i className="fas fa-angle-right fa-2x" style={{color: '#3E92BD'}}/>
                            </a>

                            <div className="controller">
                                <div className="indicate-area"/>
                            </div>

                        </div>

                    </div>

                </div>

                {/*RESTAURANTE*/}

                <div className="fondoRestaurante container-fluid">


                </div>

                <div className="restaurante container-fluid pt-5" id="restaurante">

                    <div className="container">

                        <div className="grid-container">

                            <div className="grid-item carta">

                                <div className="row p-1 p-lg-5">

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato01} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato02} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato03} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato04} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato05} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-6 col-md-4 text-center p-1">

                                        <img src={ImagePlato06} className="img-fluid w-50 rounded-circle"/>

                                        <p className="py-2">Lorem ipsum dolor sit amet consectetur</p>

                                    </div>

                                    <div className="col-12 text-center d-block d-lg-none">

                                        <button className="btn btn-warning text-uppercase mb-5 volverCarta">Volver
                                        </button>

                                    </div>

                                </div>

                            </div>

                            <div className="grid-item bloqueRestaurante">

                                <h1 className="mt-4 my-lg-5">RESTAURANTE</h1>

                                <p className="p-4 my-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo beatae nemo, saepe iusto, voluptas fuga. Nesciunt tempora nobis quia,
                                    officia
                                    at corporis sint sunt saepe quod labore hic iusto totam.</p>

                                <button className="btn btn-warning text-uppercase mb-5 verCarta">Ver la carta</button>

                            </div>

                        </div>

                    </div>

                </div>

                {/*CONTÁCTENOS*/}

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

                {/*MAPA*/}
                <div className="mapa container-fluid bg-white p-0">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2181015083097!2d-75.16167268476889!3d6.2349559954867315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e441d2a2f90b049%3A0xe73c0a7060062903!2sHOTEL+PORTOBELO+GUATAPE!5e0!3m2!1ses!2sco!4v1544281019677"
                        width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen/>

                    <div className=" p-4 info">

                        <h3 className="mt-4"><strong>Visítanos</strong></h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                        <p>
                            Apple inc.<br/>
                            Infinte Loop.<br/>
                            Cupertino, CA 95014<br/>
                            408-996-1010
                        </p>

                        <p className="pb-4">Email: info@apple.com<br/>
                            Tel: 1-800-676-2775 </p>

                    </div>

                </div>

                {/*FOOTER*/}

                <footer className="container-fluid p-0">

                    <div className="grid-container">

                        <div className="grid-item d-none d-lg-block pt-2"/>

                        <div className="grid-item d-none d-lg-block pt-2">

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat.</p>

                        </div>

                        <div className="grid-item pt-2">

                            <ul className="py-1">

                                <li>
                                    <a href="#" target="_blank"><i
                                        className="fab fa-facebook-f lead text-white float-left mx-3"/></a>
                                </li>

                                <li>
                                    <a href="#" target="_blank"><i
                                        className="fab fa-twitter lead text-white float-left mx-3"/></a>
                                </li>

                                <li>
                                    <a href="#" target="_blank"><i
                                        className="fab fa-youtube lead text-white float-left mx-3"/></a>
                                </li>


                                <li>
                                    <a href="#" target="_blank"><i
                                        className="fab fa-instagram lead text-white float-left mx-3"/></a>
                                </li>

                            </ul>

                        </div>

                    </div>

                </footer>

                {/*REDES SOCIALES MÓVIL*/}

                <ul className="redesMovil p-2 nav nav-justified">

                    <li className="nav-item">
                        <a href="#" target="_blank"><i className="fab fa-facebook-f lead text-white"/></a>
                    </li>

                    <li className="nav-item">
                        <a href="#" target="_blank"><i className="fab fa-twitter lead text-white"/></a>
                    </li>

                    <li className="nav-item">
                        <a href="#" target="_blank"><i className="fab fa-youtube lead text-white"/></a>
                    </li>

                    <li className="nav-item">
                        <a href="#" target="_blank"><i className="fab fa-instagram lead text-white"/></a>
                    </li>

                </ul>

                {/*VENTANA MODAL PLANES*/}

                <div className="modal" id="modalPlanes">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title"/>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">

                                <img src="" className="img-thumbnail"/>

                                <p className="py-3"/>

                                <div className="text-center">
                                    <a href="habitaciones.html" className="btn btn-primary text-center">Separa tu
                                        habitación</a>
                                </div>

                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
                            </div>

                        </div>

                    </div>

                </div>

                {/*VENTANA MODAL INGRESO*/}

                <div className="modal" id="modalIngreso">

                    <div className="modal-dialog">

                        <div className="modal-content">

                            <div className="modal-header bg-info text-white">
                                <h4 className="modal-title">Ingresar</h4>
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

                                {/*INGRESO DIRECTO*/}

                                <hr className="mt-0"/>

                                <form>

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


                                    <input type="submit" className="btn btn-dark btn-block" value="Ingresar"/>

                                </form>

                            </div>


                            <div className="modal-footer">

                                ¿No tiene una cuenta registrada? |

                                <strong>

                                    <a href="#modalRegistro" data-toggle="modal" data-dismiss="modal">
                                        Registrarse
                                    </a>

                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

                {/*VENTANA MODAL REGISTRO*/}

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
            </div>

    );
    }
    }
    export default IndexComponent;
