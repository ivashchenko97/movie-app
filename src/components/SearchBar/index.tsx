import React from 'react';

import './styles.css';

interface SearchBarProps {
	value: string
	setSearchValue: (value: string) => void
	searchForFilms: (name: string) => void
}

const SearchBar = ({ value, setSearchValue, searchForFilms }: SearchBarProps) => (
	<div className='searchBarContainer'>
		<input
			onKeyDown={e => e.key === 'Enter' && searchForFilms(value)}
			className='searchInput'
			value={value}
			onChange={(event) => setSearchValue(event.target.value)}
			placeholder='Type to search'
		/>
		<button onClick={() => searchForFilms(value)} className='searchButton'>
			Search
            </button>
	</div>
);

export default SearchBar;