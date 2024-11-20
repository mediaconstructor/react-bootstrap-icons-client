
"use client";
import React from "react";
import {IconProps, BrightnessLow} from "react-bootstrap-icons";

export const CI_BrightnessLow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BrightnessLow {...props}/>
        </>
    );
}
