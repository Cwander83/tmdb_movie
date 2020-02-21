import React from 'react';
import YearInput from './YearInput';

const Form = props => {
    console.log(props);
    return (
        <form onSubmit={props.submitYear}>
            <YearInput
                type="text"
                name="year"
                onChange={props.handleYear}
                year={props.year}
            />
            <input type="submit" value="Enter" />
        </form>
    );
};
export default Form;
