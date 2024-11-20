
"use client";
import React from "react";
import {IconProps, FiletypePdf} from "react-bootstrap-icons";

export const CI_FiletypePdf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FiletypePdf {...props}/>
        </>
    );
}
