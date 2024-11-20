
"use client";
import React from "react";
import {IconProps, PersonFillExclamation} from "react-bootstrap-icons";

export const CI_PersonFillExclamation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillExclamation {...props}/>
        </>
    );
}
