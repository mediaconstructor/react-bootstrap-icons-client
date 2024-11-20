
"use client";
import React from "react";
import {IconProps, Crosshair} from "react-bootstrap-icons";

export const CI_Crosshair : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Crosshair {...props}/>
        </>
    );
}
