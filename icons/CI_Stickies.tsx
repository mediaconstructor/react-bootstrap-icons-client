
"use client";
import React from "react";
import {IconProps, Stickies} from "react-bootstrap-icons";

export const CI_Stickies : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Stickies {...props}/>
        </>
    );
}
