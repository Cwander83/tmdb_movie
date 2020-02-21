import React, { useState } from 'react';
import Modal from '../../UI/Modal';

const MovieTable = props => {
    const [modalState, setModalState] = useState(false);
    const [activeMovie, setActiveMovie] = useState(0);

    const openModal = () => {
        setModalState(true);
    };

    const closeModal = () => {
        setModalState(false);
    };
    const setActiveMovieHandler = async x => {
        setActiveMovie(x);
        openModal();
    };

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {props.data && // only runs of props.data exists
                    props.data.map((movie, i) => {
                        return (
                            <div
                                key={i * 200}
                                onClick={() => setActiveMovieHandler(i)}
                            >
                                <img
                                    style={{ width: '200px' }}
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt="movie poster"
                                />
                            </div>
                        );
                    })}
            </div>
            <Modal
                modalState={modalState}
                openModal={openModal}
                closeModal={closeModal}
            >
                {props.data ? props.data[activeMovie].title : <h1>hi</h1>}
            </Modal>
        </>
    );
};
export default MovieTable;



    // <div className="col2">
    //     <p>{movie.title}</p>
    //     <p>{movie.overview}</p>
    //     <p>{movie.release_date}</p>
    //     <p>{movie.popularity}</p>
    //     <p>{movie.vote_average}</p>
    // </div>

