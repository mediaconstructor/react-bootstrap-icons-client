
"use client";
import React from "react";
import {IconProps, Percent} from "react-bootstrap-icons";

export const CI_Percent : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Percent {...props}/>
        </>
    );
}
