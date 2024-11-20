
"use client";
import React from "react";
import {IconProps, Speedometer} from "react-bootstrap-icons";

export const CI_Speedometer : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Speedometer {...props}/>
        </>
    );
}
