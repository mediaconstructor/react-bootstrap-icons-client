
"use client";
import React from "react";
import {IconProps, PersonFillAdd} from "react-bootstrap-icons";

export const CI_PersonFillAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillAdd {...props}/>
        </>
    );
}
