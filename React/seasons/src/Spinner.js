import React from 'react';
import { props } from 'bluebird';

const Spinner = props => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
            {props.message}
            </div>
        </div>
    );
};

Spinner.defaultProps ={
    message: 'Loading...'
};

export default Spinner;