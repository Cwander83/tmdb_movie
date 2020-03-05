import React from 'react';
import { genres } from '../../util/Genre';

import Container from '../../containers/Container';

const buttons = props => {
	return (
		<Container>
			{genres.map(genre => {
				return (
					<button key={genre.id} onClick={props.click} value={genre.id}>
						{genre.name}
					</button>
				);
			})}
		</Container>
	);
};

export default buttons;
