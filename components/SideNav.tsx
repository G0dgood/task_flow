"use client"
import Image from 'next/image'
import logo from '../assets/img/stm_logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import proimg1 from '../public/Profile.svg'
import proimg2 from '../public/Avatar.svg'
import proimg3 from '../public/Avatar (1).svg'
import proimg4 from '../public/Avatar (2).svg'
import proimg5 from '../public/Avatar (3).svg'
import sideimg from '../public/Separate.svg'
import logo_fm from '../public/Logo.svg'
import logo_fm1 from '../public/Logo.svg'
import logo_fm2 from '../public/Sprint.svg'
import logo_fm_4 from '../public/Frame_4.svg'
import logo_fm3 from '../public/Logo.svg'
import logo_fm4 from '../public/Logo.svg'
import logo_fm5 from '../public/Logo.svg'
import { useState } from 'react';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrRun } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

const SideNav = () => {

  const [moveNav, setMoveNav] = useState(false)
  const menuItems = [
    { icon: <GrRun size={20} />, label: 'Sprint' },
    { icon: <HiMiniUserGroup size={20} />, label: 'My Team' },
    { icon: <AssessmentSharpIcon fontSize="small" />, label: 'Reports' },
    { icon: <SettingsSharpIcon fontSize="small" />, label: 'Settings' },
  ];
  const ProjectCard = ({ imgSrc, alt, title }: any) => (
    <div className='projects_card'>
      <div className='projects_card_sup'>
        <span className='projects_card_img'>
          <Image src={imgSrc} alt={alt} />
        </span>
        <p className='projectx'>{title}</p>
      </div>
      <MoreVertIcon />
    </div>
  );

  const TeamMemberCard = ({ imgSrc, alt, name, status }: any) => (
    <div className='projects_card'>
      <div className='projects_card_sup'>
        <span className='projects_card_img'>
          <Image src={imgSrc} alt={alt} />
        </span>
        <span>
          <p className='projectx'>{name}</p>
          <div className='projects_card_container_small'>
            <div className='projects_card_small'></div> <small>{status}</small>
          </div>
        </span>
      </div>
      <KeyboardArrowDownIcon />
    </div>
  );


  return (
    <div id="side-nav">
      <div className={moveNav ? "side-nav_sub_full" : "side-nav_sub"} >

        <div>
          <Image src={logo_fm} alt='icon' />
          {moveNav ? <Image src={logo_fm_4} alt='icon' /> : ""}
        </div>

        <div className='icon_array'>
          <a href="#" className={moveNav ? "icon_array_active" : "icon_array_active2"}>
            <MdDashboard size={20} />{moveNav ? <p>Dashboard</p> : ""} </a>
          {menuItems.map((item, index) => (
            <div className='icon_array_none_container' key={index}>
              <a
                key={index}
                className={moveNav ? 'icon_array_none' : 'icon_array_none2'} >
                {item.icon}  {moveNav ? item.label : ''}
              </a>
            </div>
          ))}
          <a href="#" className="logout">
            <TbLogout2 size={20} />
          </a>
        </div>
        <button className='side-nav_button' onClick={() => setMoveNav(!moveNav)}>
          <Image src={sideimg} alt='icon' />
        </button>
      </div>

      <div className='side-nav_container'>
        <div>
          <p className='projects_text'>Projects</p>
          <div className='projects_card_container'>
            {[1, 2, 3, 4].map((index) => (
              <ProjectCard key={index} imgSrc={proimg1} alt='icon' title='ProjectX' />
            ))}
          </div>
        </div>

        <div>
          <p className='projects_text'>My Team</p>
          <div className='projects_card_container'>
            {[{ imgSrc: proimg2, alt: 'icon', name: 'Mandy Kane', status: 'Online' },
            { imgSrc: proimg3, alt: 'icon', name: 'Mandy Kane', status: 'Online' },
            { imgSrc: proimg4, alt: 'icon', name: 'Mandy Kane', status: 'Online' },
            { imgSrc: proimg5, alt: 'icon', name: 'Mandy Kane', status: 'Online' }].map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideNav;