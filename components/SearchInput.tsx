import React, { useState } from 'react';
import Image from 'next/image'
import LuSearch from '../public/search 2.svg'


const SearchInput = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const [suggestions] = useState([
		{ label: 'React', icon: '⚛️' },
		{ label: 'JavaScript', icon: '📜', },
		{ label: 'CSS', icon: '🎨' },
		{ label: 'HTML', icon: '📄' },
		{ label: 'Node.js', icon: '🚀' },
		{ label: 'TypeScript', icon: '🔵' },
		{ label: 'Python', icon: '🐍', },
		{ label: 'Vue.js', icon: '🖖', },
		// Add more task objects as needed
	]);

	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={`header_Search_container ${isFocused ? 'focused' : ''}`}>
			<Image src={LuSearch} alt='isn' className="logo-area-img" />
			<input
				placeholder='search'
				className='header_Search'
				value={inputValue}
				onChange={handleInputChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{isFocused && (
				<div className='suggestions_container'>
					{suggestions.map((suggestion, index) => (
						<div key={index} className='suggestion'>
							{suggestion.icon && <span className='suggestion_icon'>{suggestion.icon}</span>}
							<span className='suggestion_label'>{suggestion.label}</span>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchInput;
