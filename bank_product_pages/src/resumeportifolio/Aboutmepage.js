import React from "react";
import Aboutmepage from './Aboutmepage.css';
import rohithimage from './rohithimage.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const Aboutme = () => {
    return (<div>
        <div class="aboutme">
            <div class="aboutrohith">
                <img className="imagerohith" src={rohithimage} />
                <h2>Rohith</h2>
                <h2>Yadlapalli</h2>
                <p className="line"></p>
                <p className="associate">Associate consultant</p>
                <div className="logos">
                    <a href='https://www.facebook.com/yadlapalli.rohithchowdary/'>
                        <BsFacebook size={25}  color="black"/>
                    </a>
                    <a href='https://twitter.com/kakaragai'>
                        <BsTwitter size={25}  color="black"/>
                    </a>
                    <a href='https://www.linkedin.com/in/rohith-yadlapalli-b783751a5/'>
                        <BiLogoLinkedin size={25}  color="black"/>
                    </a>
                    <a href='https://github.com/rohithchowdary2001'>
                        <BsGithub size={25}  color="black"/>
                    </a>
                </div>
            </div>
            <div class="datarohith" >
                <div className="hello">Hello</div>
                <p className="here">Here's who I am & what I do</p>
                <div className="data" style={{ textAlign: 'justify' }}> This is my portifolio where you can find all the data related to me regarding my Education ,Job Expirience and my React JS projects. Kindly check my projects and my skills in this portifolio in detailed.</div>
            </div>
        </div>
    </div>

    );
};
export default Aboutme;