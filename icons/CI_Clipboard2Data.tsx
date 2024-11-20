
"use client";
import React from "react";
import {IconProps, Clipboard2Data} from "react-bootstrap-icons";

export const CI_Clipboard2Data : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2Data {...props}/>
        </>
    );
}
