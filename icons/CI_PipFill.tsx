
"use client";
import React from "react";
import {IconProps, PipFill} from "react-bootstrap-icons";

export const CI_PipFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PipFill {...props}/>
        </>
    );
}
