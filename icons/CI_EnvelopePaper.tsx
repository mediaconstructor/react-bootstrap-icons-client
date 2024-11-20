
"use client";
import React from "react";
import {IconProps, EnvelopePaper} from "react-bootstrap-icons";

export const CI_EnvelopePaper : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopePaper {...props}/>
        </>
    );
}
