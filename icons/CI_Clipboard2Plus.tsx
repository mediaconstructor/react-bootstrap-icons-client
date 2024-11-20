
"use client";
import React from "react";
import {IconProps, Clipboard2Plus} from "react-bootstrap-icons";

export const CI_Clipboard2Plus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2Plus {...props}/>
        </>
    );
}
