
"use client";
import React from "react";
import {IconProps, ToggleOff} from "react-bootstrap-icons";

export const CI_ToggleOff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ToggleOff {...props}/>
        </>
    );
}
