import React from 'react';

const styles = {
	header: {
		width: '100%',
		height: '5%',

		textAlign: 'center',
		background: 'transparent',
	},
	h1: {
		padding: '20px 0',
	},
};

const Header = React.memo(() => {
	return (
		<header style={styles.header}>
			<h1 style={styles.h1}>TMDb Movie Slider</h1>
		</header>
	);
});

export default Header;
