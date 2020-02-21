import React from 'react';

const containerStyle = {
	position: 'relative',
	top: '50px',
	maxWidth: '300px',
	color: 'white',
};

const container = props => {
	return <div stlye={containerStyle}>{props.children}</div>;
};

export default container;