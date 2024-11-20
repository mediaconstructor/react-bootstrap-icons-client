
"use client";
import React from "react";
import {IconProps, Clipboard} from "react-bootstrap-icons";

export const CI_Clipboard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard {...props}/>
        </>
    );
}
