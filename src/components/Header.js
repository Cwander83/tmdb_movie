import React from 'react';

const Header = React.memo(() => {
    return (
        <header>
            <h1 className="title">TMDb Movie Slider</h1>
        </header>
    );
});

export default Header;
