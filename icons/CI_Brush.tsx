
"use client";
import React from "react";
import {IconProps, Brush} from "react-bootstrap-icons";

export const CI_Brush : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Brush {...props}/>
        </>
    );
}
