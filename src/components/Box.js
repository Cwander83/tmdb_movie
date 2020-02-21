import React from 'react';

const Box = React.memo(props => {
    return (
        <div>
            {props.data &&     // only runs of props.data exists
                props.data.map((movie, i) => {
                    return (
                        <div
                            className="view"
                            key={i}
                            style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                                backgroundSize: 'cover'
                            }}
                        >
                            <div className="col1">
                                <h4># {i + 1}</h4>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                />
                            </div>
                            <div className="col2">
                                <p>{movie.title}</p>
                                <p>{movie.overview}</p>
                                <p>{movie.release_date}</p>
                                <p>{movie.popularity}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
});

export default Box;
