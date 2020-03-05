import { useState, useEffect } from 'react';

const useHttp = (genre, year, initialValue) => {
	const [data, setData] = useState(initialValue);

	useEffect(() => {
		const api = '';
		console.log(genre);
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&year=${year}`
		)
			.then(res => res.json())
			.catch(error => {
				// handle error
				console.error(error);
			})
			.then(response => {
				setData(response.results);
			});
	}, []);
	return [data];
};

export default useHttp;
