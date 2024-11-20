
"use client";
import React from "react";
import {IconProps, Markdown} from "react-bootstrap-icons";

export const CI_Markdown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Markdown {...props}/>
        </>
    );
}
