import React, { Fragment } from 'react';

const ButtonGroup = React.memo(props => {
  
    return (

        <Fragment>
            <ul>
                <li>
                    <button onClick={props.click} value="28">
                        Action
                    </button>
                </li>
                <li>
                    <button onClick={props.click} value="35">
                        Comedy
                    </button>
                </li>
                <li>
                    <button onClick={props.click} value="18">
                        Drama
                    </button>
                </li>
                <li>
                    <button onClick={props.click} value="9648">
                        Horror
                    </button>
                </li>
                <li>
                    <button onClick={props.click} value="16">
                        Sci-fi
                    </button>
                </li>
            </ul>
        </Fragment>
    );
});

export default ButtonGroup;
