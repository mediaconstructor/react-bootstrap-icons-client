
"use client";
import React from "react";
import {IconProps, Clipboard2Heart} from "react-bootstrap-icons";

export const CI_Clipboard2Heart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clipboard2Heart {...props}/>
        </>
    );
}
