
"use client";
import React from "react";
import {IconProps, Asterisk} from "react-bootstrap-icons";

export const CI_Asterisk : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Asterisk {...props}/>
        </>
    );
}
