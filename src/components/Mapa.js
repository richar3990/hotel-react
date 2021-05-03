import React, {Component} from 'react';
class Mapa extends Component{
    render(){
        return(
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

        );
    }
}
export default Mapa;
