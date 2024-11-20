
"use client";
import React from "react";
import {IconProps, PersonCircle} from "react-bootstrap-icons";

export const CI_PersonCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonCircle {...props}/>
        </>
    );
}
