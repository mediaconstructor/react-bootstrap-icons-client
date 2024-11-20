
"use client";
import React from "react";
import {IconProps, NoiseReduction} from "react-bootstrap-icons";

export const CI_NoiseReduction : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <NoiseReduction {...props}/>
        </>
    );
}
