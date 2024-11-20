
"use client";
import React from "react";
import {IconProps, CheckSquare} from "react-bootstrap-icons";

export const CI_CheckSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CheckSquare {...props}/>
        </>
    );
}
