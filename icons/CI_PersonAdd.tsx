
"use client";
import React from "react";
import {IconProps, PersonAdd} from "react-bootstrap-icons";

export const CI_PersonAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonAdd {...props}/>
        </>
    );
}
