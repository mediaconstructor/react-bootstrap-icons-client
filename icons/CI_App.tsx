
"use client";
import React from "react";
import {IconProps, App} from "react-bootstrap-icons";

export const CI_App : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <App {...props}/>
        </>
    );
}
