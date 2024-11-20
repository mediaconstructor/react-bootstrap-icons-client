
"use client";
import React from "react";
import {IconProps, PersonExclamation} from "react-bootstrap-icons";

export const CI_PersonExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonExclamation {...props}/>
        </>
    );
}
