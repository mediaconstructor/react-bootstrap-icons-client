
"use client";
import React from "react";
import {IconProps, WifiOff} from "react-bootstrap-icons";

export const CI_WifiOff : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <WifiOff {...props}/>
        </>
    );
}
