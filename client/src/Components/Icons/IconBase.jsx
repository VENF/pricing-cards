import React from 'react';

const IconBase = (props) => {
    return (
        <svg width={props.width} height={props.height} viewBox={props.viewBox}>
            { props.children }
        </svg>
    )
}

export default IconBase;
