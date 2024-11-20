
"use client";
import React from "react";
import {IconProps, PinAngle} from "react-bootstrap-icons";

export const CI_PinAngle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PinAngle {...props}/>
        </>
    );
}
