
"use client";
import React from "react";
import {IconProps, PersonFillCheck} from "react-bootstrap-icons";

export const CI_PersonFillCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillCheck {...props}/>
        </>
    );
}
