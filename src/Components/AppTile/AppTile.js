import React from 'react';

const appTile = (props) => {

    const style = {
        backgroundColor: props.color,
        height: '100px',
        width: '100px',
        cursor: 'pointer'
    };

    return(
        <div className='card' style={style} onClick={props.clickHandler}>
            <p>{props.title}</p>
        </div>
    )
}

export default appTile;