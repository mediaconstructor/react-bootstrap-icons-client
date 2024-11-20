
"use client";
import React from "react";
import {IconProps, CompassFill} from "react-bootstrap-icons";

export const CI_CompassFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CompassFill {...props}/>
        </>
    );
}
