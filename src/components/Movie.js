import React, { useEffect, useState, useCallback } from 'react';
import API_CALL from '../config'

import useHttp from '../hooks/http';
import ButtonGroup from '../components/ButtonGroup';
import MovieTable from './Movies/MovieTable';
import Loading from '../UI/Loading';
import Modal from '../components/Modal';

const Movie = props => {
    const [genreState, setGenreState] = useState(28);
    const [loading, setLoading] = useState(true);
    const [yearState, setYearState] = useState(2019);
    const [data, setData] = useState();
    //console.log(yearState, genreState);

    useEffect(() => {
        const api = process.env.API_CALL;

        const fetchData = async () => {
            await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreState}&year=${yearState}`
            )
                .then(res => res.json())
                .catch(error => {
                    // handle error
                    console.error(error);
                })
                .then(async response => {
                    // set data
                    await setData(response.results);

                    await setLoading(false);
                });
        };
        fetchData();
    }, [genreState, yearState]);

    const handleGenre = useCallback(
        event => {
            event.preventDefault();

            let genre = event.target.value;
            setGenreState(genre);
        },
        [genreState]
    );

    return (
        <div className="container">
            <ButtonGroup click={handleGenre} genres={genreState} />
            {data && !loading ? <MovieTable data={data} /> : <Loading />}
        </div>
    );
};

export default Movie;
