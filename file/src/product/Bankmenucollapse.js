import React from "react";
import Bankmenucollapse from './Bankmenucollapse.css';
import { HiMiniUserCircle } from "react-icons/hi2";
import Collapsableitem from "./Collapsableitem";
import { useState } from 'react';
import Menubar from './Menubar';


const Bankmenu = () => {
    const [isOne, setOne] = useState(true);
    const [isTwo, setTwo] = useState(false);

    const handleOne = () => {
        setOne(!isOne);
        setTwo(false);
    };

    const handleTwo = () => {
        setTwo(!isTwo);
        setOne(false);
    };
    return (
        <div className="main-container">
            <div className="sub-container">
                <div className="header">
                    <div className="head-container">
                        <div className="symbol-container">
                        </div>
                        <div className="bank-name"><b>ROHITH<br /> BANK</b></div>
                    </div>
                    <HiMiniUserCircle className="profile-logo" size={40} style={{ fill: 'black' }} />
                </div>
                <div className="bank-conttent">
                    <div className="bill-container"><b>Bill Payments</b></div>
                    <div className="bill-content">Lerem ipsum do or sit amet. consetetur sadipscing elitr,sed diam nonumy.</div>
                </div>
                <div className="only-buttons">
                    <div className="bill-his">
                        <button className='billers' onClick={handleOne}>
                            <div className='recharge-name'><b>Billers</b></div>
                            <div className={`billers ${isOne ? 'active' : ''}`}></div>
                        </button>
                        <button className="history" onClick={handleTwo}>
                            <div className='Hostory-name'><b>History</b></div>
                            <div className={`history ${isTwo ? 'active' : ''}`}></div>
                        </button>
                    </div>
                    {isOne && (<Collapsableitem />)}
                    {isTwo && (<div className="history-sub"><b>No data found</b> </div>)}

                </div>
            </div>
            <div className="menu-container">
            <Menubar/>
            </div>
        </div>
    );
};
export default Bankmenu;