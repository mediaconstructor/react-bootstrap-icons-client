
"use client";
import React from "react";
import {IconProps, FileRuled} from "react-bootstrap-icons";

export const CI_FileRuled : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FileRuled {...props}/>
        </>
    );
}
