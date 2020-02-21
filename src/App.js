import React, { Fragment } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Movie from './components/Movie';


function App() {
    return (
        <Fragment>
            <Header />
            <Movie />
            <Footer />
        </Fragment>
    );
}

export default App;
