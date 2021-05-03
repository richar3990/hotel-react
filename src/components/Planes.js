import React, {Component} from 'react';
import ImagePlanRomantico from "../assets/image/plan-romantico.png";
import ImagePlanLunaMiel from "../assets/image/luna-de-miel.png";
import ImagePlanAventura from "../assets/image/plan-aventura.png";
import ImagePlanSpa from "../assets/image/plan-spa.png";
class Planes extends Component{
    render(){
        return(
            // PLANES

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

        );
    }
}
export default Planes;
