
"use client";
import React from "react";
import {IconProps, PersonSquare} from "react-bootstrap-icons";

export const CI_PersonSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonSquare {...props}/>
        </>
    );
}
