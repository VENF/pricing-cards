import React from 'react';
import IconBase from './IconBase';
const Check = ({height, width, color}) => {
    return (
        <IconBase height={height} width={width} color={color} viewBox="0 0 10 9">
            <g fill={color}>
                <path d="M3.39644 7.97528L0.146441 4.42982C-0.0488135 4.21681 -0.0488135 3.87145 0.146441 3.65842L0.853531 2.88703C1.04879 2.674 1.36539 2.674 1.56064 2.88703L3.75 5.2754L8.43936 0.159753C8.63461 -0.0532511 8.95121 -0.0532511 9.14647 0.159753L9.85356 0.931147C10.0488 1.14415 10.0488 1.48951 9.85356 1.70254L4.10355 7.9753C3.90828 8.1883 3.5917 8.1883 3.39644 7.97528Z"/>
            </g>
        </IconBase>
    )
}

export default Check;
