import React from 'react';

const BUTTON = {
    PRIMARY: 'btn btn-primary',
    SECONDARY: 'btn btn-secondary',
    ERROR: 'btn btn-danger',
    SUCCESS: 'btn btn-success'
}

const button = (props) => (
        <button className={props.type} onClick={props.click}>{props.children}</button>
    )

export default button;
export {BUTTON};