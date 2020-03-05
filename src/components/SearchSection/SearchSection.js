import React from 'react';

import './SearchSection.css';

import Buttons from './Buttons';
import YearInput from './YearInput';

const SearchSection = props => {
	return (
		<section className="searchSection  ">
			<YearInput submit={props.setYearState} />
			<Buttons click={props.handleGenre} genres={props.genreState} />
		</section>
	);
};

export default SearchSection;
