
"use client";
import React from "react";
import {IconProps, CloudDownload} from "react-bootstrap-icons";

export const CI_CloudDownload : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudDownload {...props}/>
        </>
    );
}
