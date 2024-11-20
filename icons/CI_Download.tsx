
"use client";
import React from "react";
import {IconProps, Download} from "react-bootstrap-icons";

export const CI_Download : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Download {...props}/>
        </>
    );
}
