
"use client";
import React from "react";
import {IconProps, SignStopLights} from "react-bootstrap-icons";

export const CI_SignStopLights : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignStopLights {...props}/>
        </>
    );
}
