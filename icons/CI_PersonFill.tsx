
"use client";
import React from "react";
import {IconProps, PersonFill} from "react-bootstrap-icons";

export const CI_PersonFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFill {...props}/>
        </>
    );
}
