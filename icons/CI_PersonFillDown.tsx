
"use client";
import React from "react";
import {IconProps, PersonFillDown} from "react-bootstrap-icons";

export const CI_PersonFillDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillDown {...props}/>
        </>
    );
}
