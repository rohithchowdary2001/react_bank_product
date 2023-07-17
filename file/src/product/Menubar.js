import React from "react";
import { HiMiniUserCircle } from 'react-icons/hi2';
import { AiOutlineTransaction } from 'react-icons/ai';
import { MdOutlinePayments } from 'react-icons/md';
import { LiaMoneyBillSolid } from 'react-icons/lia';
import { CiCircleMore } from 'react-icons/ci';
import Menubar from './Menubar.css';




const menubar = () => {
  return (
    <div className="menu-container">
      <div className="menu-items">
        <button className="menu-button">  <HiMiniUserCircle size={40} style={{ fill: 'green' }} /></button>
        <div>User</div>
      </div>
      <div className="menu-items">
        <button className="menu-button">   <AiOutlineTransaction size={40} style={{ fill: 'green' }} /></button>
        <div>Transactions</div>
      </div>
      <div className="menu-items">
        <button className="menu-button">   <MdOutlinePayments size={40} style={{ fill: 'green' }} /></button>
        <div>Payments</div>
      </div>
      <div className="menu-items">
        <button className="menu-button">   <LiaMoneyBillSolid size={40} style={{ fill: 'green' }} /></button>
        <div>Pay Bills</div>
      </div>
      <div className="menu-items">
        <button className="menu-button">   <CiCircleMore size={40} style={{ fill: 'green' }} /></button>
        <div>More</div>
      </div>
    </div>
  );
};
export default menubar;