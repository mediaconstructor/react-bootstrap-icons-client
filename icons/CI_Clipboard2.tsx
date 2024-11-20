
"use client";
import React from "react";
import {IconProps, Clipboard2} from "react-bootstrap-icons";

export const CI_Clipboard2 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2 {...props}/>
        </>
    );
}
