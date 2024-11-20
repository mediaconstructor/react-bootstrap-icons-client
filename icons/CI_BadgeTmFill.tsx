
"use client";
import React from "react";
import {IconProps, BadgeTmFill} from "react-bootstrap-icons";

export const CI_BadgeTmFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeTmFill {...props}/>
        </>
    );
}
