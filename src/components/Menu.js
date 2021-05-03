import React, {Component} from 'react';
import $ from "jquery";

class Menu extends Component {
    componentDidMount() {
        if(window.matchMedia("(max-width:768px)").matches){
            $(".botonMenu").click(function(){
                $(".menuMovil").slideToggle('fast');
                $(".menuMovil").css({"top":$("header").height()})
            })
            $(".menuMovil ul li a").click(function(e){
                $(".menuMovil").slideToggle('fast');
                e.preventDefault();
                var vinculo = $(this).attr("href");
                $("html, body").animate({
                    scrollTop: $(vinculo).offset().top - 55
                }, 1000, "easeInOutBack")
            })
        }else{
            $(".botonMenu").click(function(){
                $(".menu").slideToggle('fast');
                $(".formReservas").slideUp('fast');
            })
            $(".menu ul li a").click(function(e){
                $(".menu").slideToggle('fast');
                e.preventDefault();
                var vinculo = $(this).attr("href");
                $("html, body").animate({
                    scrollTop: $(vinculo).offset().top - 60
                }, 1000, "easeInOutBack")
            })
        }
    }
    render() {
        const divStyle = {
            display: 'block'

        }
        return (
            // MENÚ
        <React.Fragment>

        <nav className="menu container-fluid p-0">

            <ul className="nav nav-justified py-2" style={divStyle}>

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
            </React.Fragment>
        );
    }
}

export default Menu;
