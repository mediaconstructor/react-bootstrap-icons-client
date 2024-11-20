
"use client";
import React from "react";
import {IconProps, PersonX} from "react-bootstrap-icons";

export const CI_PersonX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonX {...props}/>
        </>
    );
}
