import React from "react";
import Welcomepage from './Welcomepage.css';
import Aboutme from './Aboutmepage';


const Portifolio = () => {
    return (
        <div className="container">
            <div className="meninblack">
                <div className="menuitems">
                    <div className="name">
                        <div className="bluebox"></div>
                        <div className="myname"><b>Rohith yadlapalli</b>/Associate Consultant</div>
                    </div>
                    <div className="items">
                        <button className="items-menu" >ABOUT ME</button>
                        <button className="items-menu">RESUME</button>
                        <button className="items-menu">PROJECTS</button>
                        <button className="items-menu">CONTACT</button>
                    </div>
                </div>
                <Aboutme />
            </div>
            <footer className="footer">
                <div>Contact</div>
                <div>E-mail:rohithyadlapalli2001@gmail.com</div>
                <div>Help</div>
                <div>About</div>
            </footer>
        </div>
    );
}
export default Portifolio;  