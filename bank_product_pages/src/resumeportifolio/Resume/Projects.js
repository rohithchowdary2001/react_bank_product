import React from "react";
import Projects from './Projects.css';
import nlpimage from '../nlpimage.png';
import nut from '../nut.png';


const Resumeproject = () => {
    return (
        <div className="containerrr">
            <div className='resumelinee'>
                <div className='bluedott'></div>
                <div className='rresume'><b>Projects</b></div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '4%' }}>
               <div style={{fontSize:'20px'}}> Here are the some projects which I did during my job and in my under graduation.</div>
            </div>
            <div className='b'>
                <div className='haritha' style={{ fontSize: '25px' }}><b>1st Project</b></div>
                <div className='bro'>
                <div className='eeducationcontent' style={{textAlign:'justify',paddingRight:'50px'}}>Project titled as named entity recognition using NLP approach which is used to find the different entities present in a article which we took from wikipedia and here we reached 96% of accuracy and also we compared this model with BERT and CNF also.
                    </div>
                    <div className='c'>
                    <img className="imageee" src={nlpimage} />
                    </div>

                </div>
            </div>
            <div className='b'>
                <div className='haritha' style={{ fontSize: '25px' }}><b>2nd Project</b></div>
                <div className='bro'>
                <div className='eeducationcontent' style={{textAlign:'justify',paddingRight:'50px'}}>Project titled as CRUD operations uisng react js , spring boot and sql which is a application used to add products by owner and order products by user and in this application we can apply coupens and also placeorder. Here we developed this application to sell nuts.
                    </div>
                    <div className='c'>
                    <img className="imageee" src={nut} />
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Resumeproject;