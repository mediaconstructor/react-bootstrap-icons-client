
"use client";
import React from "react";
import {IconProps, PersonDown} from "react-bootstrap-icons";

export const CI_PersonDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonDown {...props}/>
        </>
    );
}
