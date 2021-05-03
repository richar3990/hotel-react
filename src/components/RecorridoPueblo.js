import React, {Component} from 'react';
import ImagePueblo01a from "../assets/image/pueblo01a.png";
import ImagePueblo01b from "../assets/image/pueblo01b.png";
import ImagePueblo02a from "../assets/image/pueblo02a.png";
import ImagePueblo02b from "../assets/image/pueblo02b.png";
import ImagePueblo03a from "../assets/image/pueblo03a.png";
import ImagePueblo03b from "../assets/image/pueblo03b.png";
class RecorridoPueblo extends Component{
    render(){
        return(
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

        );
    }
}
export default RecorridoPueblo;
