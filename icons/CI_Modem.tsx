
"use client";
import React from "react";
import {IconProps, Modem} from "react-bootstrap-icons";

export const CI_Modem : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Modem {...props}/>
        </>
    );
}
