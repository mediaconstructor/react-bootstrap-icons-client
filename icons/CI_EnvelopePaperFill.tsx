
"use client";
import React from "react";
import {IconProps, EnvelopePaperFill} from "react-bootstrap-icons";

export const CI_EnvelopePaperFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EnvelopePaperFill {...props}/>
        </>
    );
}
