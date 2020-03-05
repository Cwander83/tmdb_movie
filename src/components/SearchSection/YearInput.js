import React, { useState, useRef, useEffect } from 'react';

const YearInput = React.memo(props => {
	const { submit } = props;
	const inputRef = useRef();
	const [enteredFilter, setEnteredFilter] = useState('');
	const [enteredYear, setEnteredYear] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	//['Not in future please", 'Sorry cant before 1900', ]

	useEffect(() => {
		const timer = setTimeout(() => {
			if (enteredFilter === inputRef.current.value) {
				if (enteredFilter.length < 4 || enteredFilter.length > 4) {
					setErrorMsg('YYYY format i.e 2010 ');
				} else if (enteredFilter < 2020 || enteredFilter < 1900) {
					setErrorMsg('1900 to current year is only valid years, sorry');
				}
				submit(enteredFilter);
				setEnteredYear(enteredFilter);
			}
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [enteredFilter, inputRef, submit]);

	return (
		<>
			<label>Year</label>
			<input
				type="text"
				ref={inputRef}
				value={enteredFilter}
				onChange={event => setEnteredFilter(event.target.value)}
			/>
			{errorMsg ? <p>{errorMsg}</p> : <p>{enteredYear}</p>}
		</>
	);
});

export default YearInput;
