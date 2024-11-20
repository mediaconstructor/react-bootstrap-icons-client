
"use client";
import React from "react";
import {IconProps, HeartPulseFill} from "react-bootstrap-icons";

export const CI_HeartPulseFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartPulseFill {...props}/>
        </>
    );
}
