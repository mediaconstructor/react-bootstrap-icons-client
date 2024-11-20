
"use client";
import React from "react";
import {IconProps, Speedometer2} from "react-bootstrap-icons";

export const CI_Speedometer2 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Speedometer2 {...props}/>
        </>
    );
}
