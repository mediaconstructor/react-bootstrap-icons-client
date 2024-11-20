
"use client";
import React from "react";
import {IconProps, BrowserChrome} from "react-bootstrap-icons";

export const CI_BrowserChrome : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BrowserChrome {...props}/>
        </>
    );
}
