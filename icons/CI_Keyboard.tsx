
"use client";
import React from "react";
import {IconProps, Keyboard} from "react-bootstrap-icons";

export const CI_Keyboard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Keyboard {...props}/>
        </>
    );
}
