
"use client";
import React from "react";
import {IconProps, Clipboard2Fill} from "react-bootstrap-icons";

export const CI_Clipboard2Fill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2Fill {...props}/>
        </>
    );
}
