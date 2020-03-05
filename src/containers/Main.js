import React, { useEffect, useState, useCallback } from 'react';

import MovieTable from '../components/Movies/MovieTable';
import Loading from '../UI/Loading';
import Container from './Container';

import SearchSection from '../components/SearchSection/SearchSection';

const Main = props => {
	const [genreState, setGenreState] = useState(28);
	const [loading, setLoading] = useState(true);
	const [yearState, setYearState] = useState(2019);
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_TMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreState}&year=${yearState}`
			)
				.then(res => res.json())
				.catch(error => {
					// handle error
					console.error(error);
				})
				.then(async response => {
					// set data
					setData(response.results);

					setLoading(false);
				});
		};
		fetchData();
	}, [genreState, yearState]);

	// function to change genre
	const handleGenre = useCallback(event => {
		event.preventDefault();

		let genre = event.target.value;
		setGenreState(genre);
	}, []);
	// function to change year

	return (
		<Container>
			<SearchSection
				setYearState={setYearState}
				handleGenre={handleGenre}
				genreState={genreState}
			/>

			{data && !loading ? <MovieTable data={data} /> : <Loading />}
		</Container>
	);
};

export default Main;
