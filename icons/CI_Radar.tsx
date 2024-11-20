
"use client";
import React from "react";
import {IconProps, Radar} from "react-bootstrap-icons";

export const CI_Radar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Radar {...props}/>
        </>
    );
}
