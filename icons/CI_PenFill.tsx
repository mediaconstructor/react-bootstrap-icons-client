
"use client";
import React from "react";
import {IconProps, PenFill} from "react-bootstrap-icons";

export const CI_PenFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PenFill {...props}/>
        </>
    );
}
