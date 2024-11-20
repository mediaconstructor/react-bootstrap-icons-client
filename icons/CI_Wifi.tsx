
"use client";
import React from "react";
import {IconProps, Wifi} from "react-bootstrap-icons";

export const CI_Wifi : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wifi {...props}/>
        </>
    );
}
