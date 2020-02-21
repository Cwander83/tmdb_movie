import React, { Fragment } from 'react';

const YearInput = props => {
    return (
        <Fragment>
            <label>Year:</label>
            <input {...props} />
          
        </Fragment>
    );
};

export default YearInput;
