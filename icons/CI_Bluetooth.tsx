
"use client";
import React from "react";
import {IconProps, Bluetooth} from "react-bootstrap-icons";

export const CI_Bluetooth : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bluetooth {...props}/>
        </>
    );
}
