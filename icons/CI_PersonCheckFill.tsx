
"use client";
import React from "react";
import {IconProps, PersonCheckFill} from "react-bootstrap-icons";

export const CI_PersonCheckFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonCheckFill {...props}/>
        </>
    );
}
