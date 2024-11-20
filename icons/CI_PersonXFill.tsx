
"use client";
import React from "react";
import {IconProps, PersonXFill} from "react-bootstrap-icons";

export const CI_PersonXFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonXFill {...props}/>
        </>
    );
}
