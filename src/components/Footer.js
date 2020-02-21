import React from 'react';

const styles = {
	footer: {
		position: 'absolute',
		right: '0',
		bottom: '0',
		left: '0',
		padding: '1rem',
		backgroundColor: '#efefef',
		color: 'black',
	},
	span: {
		float: 'right',
        marginRight: '10%',
        
	},
};

const Footer = React.memo(() => {
	return (
		<footer style={styles.footer}>
			<span stlye={styles.span}>Chris Wander</span>
		</footer>
	);
});

export default Footer;
