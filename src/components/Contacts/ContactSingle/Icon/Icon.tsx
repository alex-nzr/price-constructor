import React from 'react';
import {IIconProps} from "../../../../types/icon";

const Icon = ({icon}:IIconProps) => {
    return (
        <React.Fragment>
            <svg>
                <use xlinkHref={`#${icon}`} />
            </svg>
        </React.Fragment>
    );
};

export default Icon;