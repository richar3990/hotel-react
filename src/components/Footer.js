import React, {Component} from 'react';
class FooterComponent extends Component{
    render(){
        return(
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
        );
    }
}
export default FooterComponent;
