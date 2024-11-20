
"use client";
import React from "react";
import {IconProps, ThermometerHigh} from "react-bootstrap-icons";

export const CI_ThermometerHigh : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThermometerHigh {...props}/>
        </>
    );
}
