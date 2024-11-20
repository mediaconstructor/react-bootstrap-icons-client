
"use client";
import React from "react";
import {IconProps, BrowserSafari} from "react-bootstrap-icons";

export const CI_BrowserSafari : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BrowserSafari {...props}/>
        </>
    );
}
