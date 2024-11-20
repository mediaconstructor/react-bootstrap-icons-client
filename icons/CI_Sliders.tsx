
"use client";
import React from "react";
import {IconProps, Sliders} from "react-bootstrap-icons";

export const CI_Sliders : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Sliders {...props}/>
        </>
    );
}
