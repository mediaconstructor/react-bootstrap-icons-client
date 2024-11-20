
"use client";
import React from "react";
import {IconProps, Thermometer} from "react-bootstrap-icons";

export const CI_Thermometer : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Thermometer {...props}/>
        </>
    );
}
