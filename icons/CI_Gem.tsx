
"use client";
import React from "react";
import {IconProps, Gem} from "react-bootstrap-icons";

export const CI_Gem : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Gem {...props}/>
        </>
    );
}
