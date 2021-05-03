import React, {Component} from 'react';
import ImagePlato01 from "../assets/image/plato01.png";
import ImagePlato02 from "../assets/image/plato02.png";
import ImagePlato03 from "../assets/image/plato03.png";
import ImagePlato04 from "../assets/image/plato04.png";
import ImagePlato05 from "../assets/image/plato05.png";
import ImagePlato06 from "../assets/image/plato06.png";
class Restaurant extends Component{

    render(){

        return(
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}
export default Restaurant;
