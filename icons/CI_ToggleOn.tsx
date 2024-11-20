
"use client";
import React from "react";
import {IconProps, ToggleOn} from "react-bootstrap-icons";

export const CI_ToggleOn : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ToggleOn {...props}/>
        </>
    );
}
