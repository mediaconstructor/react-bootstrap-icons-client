
"use client";
import React from "react";
import {IconProps, CloudUpload} from "react-bootstrap-icons";

export const CI_CloudUpload : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudUpload {...props}/>
        </>
    );
}
