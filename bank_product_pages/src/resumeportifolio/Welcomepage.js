// import React from "react";
// import Welcomepage from './Welcomepage.css';
// import Aboutme from './Aboutmepage';
// import Resume from '../resumeportifolio/Resume/Resume';
// import Projects from '../resumeportifolio/Resume/Projects';
// import Contactme from '../resumeportifolio/Resume/Contact';

// const Portifolio = () => {

//     return (
//         <div className="container">
//             <div className="meninblack">
//                 <div className="menuitems">
//                     <div className="name">
//                         <div className="bluebox"></div>
//                         <div className="myname"><b>Rohith yadlapalli</b>/Associate Consultant</div>
//                     </div>
//                     <div className="items">
//                         <button className="items-menu" >ABOUT ME</button>
//                         <button className="items-menu" >RESUME</button>
//                         <button className="items-menu">PROJECTS</button>
//                         <button className="items-menu">CONTACT</button>
//                     </div>
//                 </div>
//                 <Aboutme />
//                  <Resume/> 
//                 <Projects/> 
//                 <Contactme />
//             </div>
//             <footer className="footer">
//                 <div>Contact</div>
//                 <div>E-mail:rohithyadlapalli2001@gmail.com</div>
//                 <div>Help</div>
//                 <div>About</div>
//             </footer>
//         </div>
//     );
// }
// export default Portifolio;  



import React, { useState } from "react";
import Welcomepage from './Welcomepage.css';
import Aboutme from './Aboutmepage';
import Resume from '../resumeportifolio/Resume/Resume';
import Projects from '../resumeportifolio/Resume/Projects';
import Contactme from '../resumeportifolio/Resume/Contact';

const Portifolio = () => {
    const [selectedContent, setSelectedContent] = useState('about');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
    };

    let contentToDisplay;
    if (selectedContent === 'about') {
        contentToDisplay = <Aboutme />;
    } else if (selectedContent === 'resume') {
        contentToDisplay = <Resume />;
    } else if (selectedContent === 'projects') {
        contentToDisplay = <Projects />;
    } else if (selectedContent === 'contact') {
        contentToDisplay = <Contactme />;
    }

    return (
        <div className="container">
            <div className="meninblack">
                <div className="menuitems">
                    <div className="name">
                        <div className="bluebox"></div>
                        <div className="myname"><b>Rohith yadlapalli</b>/Associate Consultant</div>
                    </div>
                    <div className="items">
                        <button className={`items-menu ${selectedContent === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>ABOUT ME</button>
                        <button className={`items-menu ${selectedContent === 'resume' ? 'active' : ''}`} onClick={() => handleButtonClick('resume')}>RESUME</button>
                        <button className={`items-menu ${selectedContent === 'projects' ? 'active' : ''}`} onClick={() => handleButtonClick('projects')}>PROJECTS</button>
                        <button className={`items-menu ${selectedContent === 'contact' ? 'active' : ''}`} onClick={() => handleButtonClick('contact')}>CONTACT</button>
                    </div>
                </div>
                {contentToDisplay}
            </div>
            <footer className="footer">
                <div style={{ paddingTop: '20px' }}>
                    <div>Contact:</div>
                    <div>9492960422</div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <div >E-mail:</div>
                    <div>rohithyadlapalli2001@gmail.com</div>
                </div>
                {/* <div style={{ paddingTop: '20px' }}>Help</div>
                <div style={{ paddingTop: '20px' }}>About</div> */}
            </footer>
        </div>
    );
}

export default Portifolio;
