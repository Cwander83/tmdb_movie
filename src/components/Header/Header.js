import React from 'react';

import './Header.css';

const Header = React.memo(() => {
	return (
		<header>
			<h1 className="title">
				i<span style={{ color: 'Red', fontSize: '34px' }}>P</span>ictures
			</h1>
		</header>
	);
});

export default Header;
