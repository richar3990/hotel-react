import React, {Component} from 'react';
import Home from "./components/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Menu from "./components/Menu";
import MenuMovil from "./components/MenuMovil";
import IndexComponent from "./components/IndexComponent";
import Banner from "./components/Banner";
import Planes from "./components/Planes";
import Habitaciones from "./components/Habitaciones";
import RecorridoPueblo from "./components/RecorridoPueblo";
import Restaurant from "./components/Restaurant";
import Contactenos from "./components/Contactenos";
import Mapa from "./components/Mapa";
import FooterComponent from "./components/Footer";
import ModalPlanes from "./components/Modales/ModalPlanes";
import ModalIngreso from "./components/Modales/ModalIngreso";
import ModalRegistro from "./components/Modales/ModalRegistro";
class Router extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<IndexComponent/>*/}

                <Header/>
                {/*<Home/>*/}
                <Menu/>
                <MenuMovil/>
                <Banner/>
                <Planes/>
                <Habitaciones/>
                <RecorridoPueblo/>
                <Restaurant/>
                <Contactenos/>
                <Mapa/>
                <FooterComponent/>
                <ModalPlanes/>
                <ModalIngreso/>
                <ModalRegistro/>
             {/*<BrowserRouter/>*/}
             {/*<Menu/>*/}
            {/*// <Header/>*/}
            {/*//*/}
            {/*// <Switch/>*/}
            {/*// <Route exact path="/inicio" component={Home}/>*/}
             </React.Fragment>
        );
    }
            
}
export default Router;
