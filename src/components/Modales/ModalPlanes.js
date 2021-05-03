import React, {Component} from 'react';
import ImagePlanRomantico from "../../assets/image/luna-de-miel.png";
class ModalPlanes extends Component{
    render(){
        return(
            <div className="modal" id="modalPlanes">

                <div className="modal-dialog">

                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title"></h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">

                            <img src={ImagePlanRomantico} className="img-thumbnail"/>

                                <p className="py-3"></p>

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

        );
    }
}
export default ModalPlanes;
