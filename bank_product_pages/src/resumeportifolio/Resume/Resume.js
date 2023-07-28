import react from 'react';
import Resume from '../Resume/Resume.css';
import RohithResume from '../RohithResume.pdf';

const Resumee = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('RohithResume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Rohith.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className='a'>
            <div className='resumeline'>
                <div className='bluedot'></div>
                <div className='resume'><b>Resume</b></div>
            </div>
            <div className='b'>
                <div className='haritha' style={{ fontSize: '25px' }}><b>Experience</b></div>
                <div className='bro'>
                    <div className='c'>
                        <div style={{ color: "blue", fontSize: '20px' }}>2022 - Present</div><br />
                        <div>Associate Consultant</div><br />
                        <div> Eviden</div><br />
                        <div> Chennai</div><br />
                    </div>
                    <div className='educationcontent' style={{ textAlign: 'justify', paddingRight: '20px' }}>I'm working as an web developer for MANULIFE account build team here I develop frint end web pages based on the client requirements using new technologies such as react js, node js, and also i intract with backend technologies such as spring boot and database such as sql.
                    </div>
                </div>
            </div>



            <div className='b'>
                <div className='haritha' style={{ fontSize: '25px' }}><b>Education</b></div>
                <div className='ramya'>
                    <div className='bro'>
                        <div className='c'>
                            <div style={{ color: " blue", fontSize: '20px' }}>2019 - 2022</div><br />
                            <div>Computer Science and Engineering</div><br />
                            <div> SASI Institute of Technology and Engineering</div><br />
                            <div> Tadepalligudem</div><br />
                        </div>
                        <div className='educationcontent' style={{ textAlign: 'justify', paddingRight: '20px' }}>Here is the place where I learned computer languages and coding such as C, Data Structures, Python, R Programming and Algorithm Design and Analysis. Where i did a project named as Named Entity recognization using NLP Process as my final year project.
                        </div>
                    </div>
                    <div className='bro'>
                        <div className='c'>
                            <div style={{ color: "blue", fontSize: '20px' }}>2016 - 2019</div><br />
                            <div>Civil Engineering</div><br />
                            <div> VKR & VNB polytehnic collage</div><br />
                            <div> Gudivada</div><br />
                        </div>
                        <div className='educationcontent' style={{ textAlign: 'justify', paddingRight: '20px' }}>This is the place where i have got my maturity and a good friends and i did my diploma in Civil Engineering and also i did an internship in dalapathy constructions as an intern where i learned site management and labour management.
                        </div>
                    </div>
                </div>
            </div>


            <div className='b'>
                <div className='haritha' style={{ fontSize: '25px' }}><b>Professional skillset</b></div>
                <div className='bhavani'>
                    <div className='lakshmi'>
                        <div><b>Programming languages</b></div>
                        <div className='swetha'>
                            <ul>HTML 5</ul>
                            <ul>CSS 3</ul>
                            <ul>React Java Script</ul>
                            <ul>Node Java Script</ul>
                        </div>
                    </div>
                    <div className='lakshmi'>
                        <div><b>Hobbies</b></div>
                        <div className='swetha'>
                            <ul>Inspecting Codes</ul>
                            <ul>Social Phising</ul>
                            <ul>Writing Diary</ul>
                        </div>
                    </div>
                </div>
            </div>
            <button className='buttonsss' onClick={onButtonClick}>DOWNLOAD CV</button>
        </div>
    );
};
export default Resumee;