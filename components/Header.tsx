"use client"
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import Image from 'next/image'
import bell from '../public/Notification.svg'
import chat from '../public/fluent_chat.svg'
import profile_header from '../public/Profile_header.svg'


const Header = () => {
	const [title] = useState("TF | TaskFlow");

	useEffect(() => {
		document.title = title;
	}, [title]);
	return (
		<div id="header">
			<div className="header-pageTitle">Dashboard </div>
			<SearchInput />
			<div className='FaPlus-icon-container' >
				<Image src={chat} alt='isn' className="logo-area-img chat_bell_icon" />
				<Image src={bell} alt='notification' className=" logo-area-img" />
				<div className='FaPlus-icon-container2'>
					<span className='FaPlus-name'  >
						<Image src={profile_header} alt='profile_header' />
					</span>
					<div>
						<h3 className='FaPlus-name_h3' >John Doe</h3>
						<p className='FaPlus-name_p'>johndoe@example.com</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;




