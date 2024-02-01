"use client"
import { useState } from 'react'
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const BottomNavigation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);




  return (
    <div className="footer">
      <div className="footer_container">
        <div className={"footerOption"}>
          <BiSolidHomeAlt2 size={25} className="footerOption_icon" />
          <h4 className="footerOption_title"> </h4>
        </div>
        <div className={'footerOption-active'}>
          <RiDashboardFill size={25} className="footerOption_icon" />
          <h4 className="footerOption_title">Project</h4>
        </div>

        <div className={'footerOption'}>
          <FaUser size={25} className="footerOption_icon" />

          <h4 className="footerOption_title"> </h4>
        </div>
      </div>
    </div >
  )
}

export default BottomNavigation