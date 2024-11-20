
"use client";
import React from "react";
import {IconProps, EnvelopeFill} from "react-bootstrap-icons";

export const CI_EnvelopeFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopeFill {...props}/>
        </>
    );
}
