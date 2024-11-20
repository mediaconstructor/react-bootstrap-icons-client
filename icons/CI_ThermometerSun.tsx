
"use client";
import React from "react";
import {IconProps, ThermometerSun} from "react-bootstrap-icons";

export const CI_ThermometerSun : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThermometerSun {...props}/>
        </>
    );
}
