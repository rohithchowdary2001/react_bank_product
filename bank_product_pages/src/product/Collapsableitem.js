import {Collapsableitem} from './Collapsableitem.css';
import { HiMiniUserCircle } from "react-icons/hi2";
import { RiHospitalLine } from "react-icons/ri";
import { LiaDonateSolid } from "react-icons/lia";
import { MdOutlinePowerOff } from "react-icons/md";
import { WiDayRain } from "react-icons/wi";
import { IoIosSchool } from "react-icons/io";
import { MdFingerprint } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";






import React, { useState } from 'react';

const Collapsable = () => {
    const [isOne, setOne] = useState(false);
    const [isTwo, setTwo] = useState(false);
    const [isThree, setThree] = useState(false);
    const [isFour, setFour] = useState(false);
    // const [isExpanded, setExpanded] = useState(false);

  
    const handleOne = () => {
      setOne(!isOne);
      setTwo(false);
      setThree(false);
      setFour(false);
    //   setExpanded(!isExpanded);
    };
  
    const handleTwo = () => {
      setTwo(!isTwo);
      setOne(false);
      setThree(false);
      setFour(false);
    //   setExpanded(!isExpanded);
    };
    const handleThree = () => {
        setThree(!isThree);
        setOne(false);
        setTwo(false);
        setFour(false);
        // setExpanded(!isExpanded);
      };
      const handleFour = () => {
        setFour(!isFour);
        setOne(false);
        setTwo(false);
        setThree(false);
        // setExpanded(!isExpanded);

      };
    
    return (
        <div className='container'>
            <div className="collapsible-menu">
            <div className={`menu-bar ${isOne ? 'clicked' : ''}`} onClick={handleOne}>
                <button className="toggle-button" onClick={handleOne}>
                    <div className='recharge-name'><b>Recharge</b></div>
                    {isOne ? <SlMinus className='plus-name' size={22}/>:<BsPlusCircle className='plus-name' size={22} />}
                </button>
                {isOne && (
                    <div className="menu-items">
                        <div className='rohith'>
                            <RiHospitalLine className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>hospital</div>
                        </div>
                        <div className='rohith'>
                            <LiaDonateSolid className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Donation</div>
                        </div>
                        <div className='rohith'>
                            <MdOutlinePowerOff className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Houseing</div>
                        </div>
                        <div className='rohith'>
                            <WiDayRain className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Weather</div>
                        </div>
                        <div className='rohith'>
                            <IoIosSchool className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Education</div>
                        </div>
                        <div className='rohith'>
                            <MdFingerprint className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Security</div>
                        </div>
                        <div className='rohith'>
                            <MdEmojiTransportation className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Transport</div>
                        </div>

                    </div>
                )}
            </div>
            </div>





            <div className="collapsible-menu">
            <div className={`menu-bar ${isTwo ? 'clicked' : ''}`} onClick={handleTwo}>
                <button className="toggle-button" onClick={handleTwo}>
                    <div className='recharge-name'><b>Finance & Tag</b></div>
                    {/* <BsPlusCircle className='plus-name'/> */}
                    {isTwo ? <SlMinus className='plus-name' size={22}/>:<BsPlusCircle className='plus-name' size={22}/>}

                </button>
                {isTwo && (
                    <div className="menu-items">
                        <div className='rohith'>
                            <RiHospitalLine className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>hospital</div>
                        </div>
                        <div className='rohith'>
                            <LiaDonateSolid className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Donation</div>
                        </div>
                        <div className='rohith'>
                            <MdOutlinePowerOff className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Houseing</div>
                        </div>
                        <div className='rohith'>
                            <WiDayRain className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Weather</div>
                        </div>
                        <div className='rohith'>
                            <IoIosSchool className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Education</div>
                        </div>
                        <div className='rohith'>
                            <MdFingerprint className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Security</div>
                        </div>
                        <div className='rohith'>
                            <MdEmojiTransportation className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Transport</div>
                        </div>
                    </div>
                )}
            </div>
                        </div>




            <div className="collapsible-menu">
            <div className={`menu-bar ${isThree ? 'clicked' : ''}`} onClick={handleThree}>
                <button className="toggle-button" onClick={handleThree}>
                    <div className='recharge-name'><b>Utility Bills</b></div>
                    {/* <BsPlusCircle className='plus-name'/> */}
                    {isThree ? <SlMinus className='plus-name' size={22}/>:<BsPlusCircle className='plus-name' size={22}/>}

                </button>
                {isThree && (
                    <div className="menu-items">
                        <div className='rohith'>
                            <RiHospitalLine className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>hospital</div>
                        </div>
                        <div className='rohith'>
                            <LiaDonateSolid className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Donation</div>
                        </div>
                        <div className='rohith'>
                            <MdOutlinePowerOff className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Houseing</div>
                        </div>
                        <div className='rohith'>
                            <WiDayRain className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Weather</div>
                        </div>
                        <div className='rohith'>
                            <IoIosSchool className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Education</div>
                        </div>
                        <div className='rohith'>
                            <MdFingerprint className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Security</div>
                        </div>
                        <div className='rohith'>
                            <MdEmojiTransportation className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Transport</div>
                        </div>
                    </div>
                )}
            </div>
            </div>



            <div className="collapsible-menu">
            <div className={`menu-bar ${isFour ? 'clicked' : ''}`} onClick={handleFour}>
                <button className="toggle-button" onClick={handleFour}>
                    <div className='recharge-name'><b>Others</b></div>
                    {/* <BsPlusCircle className='plus-name'/> */}
                    {isFour ? <SlMinus className='plus-name' size={22}/>:<BsPlusCircle className='plus-name' size={22}/>}

                </button>
                {isFour && (
                    <div className="menu-items">
                        <div className='rohith'>
                            <RiHospitalLine className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>hospital</div>
                        </div>
                        <div className='rohith'>
                            <LiaDonateSolid className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Donation</div>
                        </div>
                        <div className='rohith'>
                            <MdOutlinePowerOff className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Houseing</div>
                        </div>
                        <div className='rohith'>
                            <WiDayRain className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Weather</div>
                        </div>
                        <div className='rohith'>
                            <IoIosSchool className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Education</div>
                        </div>
                        <div className='rohith'>
                            <MdFingerprint className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Security</div>
                        </div>
                        <div className='rohith'>
                            <MdEmojiTransportation className="profile-logo" size={40} style={{ fill: 'green' }} />
                            <div className='text'>Transport</div>
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default Collapsable;