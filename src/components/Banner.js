import React, {Component} from 'react';
import ImageBanner01 from "../assets/image/banner01.jpg";
import ImageBanner02 from "../assets/image/banner02.jpg";
import ImageBanner03 from "../assets/image/banner03.jpg";
import ImageBanner04 from "../assets/image/banner04.jpg";
//import jdSlider from 'jquery';
import jdSlider from 'jquery';
import $ from 'jquery';
class Banner extends Component{
    componentDidMount() {
    }
    render(){
        return(
            // BANNER
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
        );
    }
}
export default Banner;
