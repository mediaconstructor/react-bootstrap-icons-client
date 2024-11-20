
"use client";
import React from "react";
import {IconProps, PersonFillX} from "react-bootstrap-icons";

export const CI_PersonFillX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillX {...props}/>
        </>
    );
}
