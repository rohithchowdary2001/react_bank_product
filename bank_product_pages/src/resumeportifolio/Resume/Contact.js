import React from "react";
import Contact from './Contact.css';

const Contactme = () => {
    return (
        <div className="contact">
            <div className='contactline'>
                <div className='contactdot'></div>
                <div className='contactme'><b>Let's Connect</b></div>
            </div>
            <div className="contactcontainer">
            <div style={{width:'50px'}}>Name:</div><br/>
            <div style={{marginLeft:'50px'}}>ROHITH YADLAPALLI</div><br/>
            <div style={{width:'50px'}}>E-Mail:</div><br/>
            <div style={{marginLeft:'50px'}}>rohithyadlapalli2001@gmail.com</div><br/>
            <div style={{width:'50px'}}>Mobile:</div><br/>
            <div style={{marginLeft:'50px'}}>+91-9492960422</div><br/>
            <div style={{width:'50px'}}>WhatsApp:</div><br/>
            <div style={{marginLeft:'50px'}}>9492960422</div><br/>
        </div>
        </div>
    );
};
export default Contactme;