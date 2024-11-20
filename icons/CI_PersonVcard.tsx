
"use client";
import React from "react";
import {IconProps, PersonVcard} from "react-bootstrap-icons";

export const CI_PersonVcard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonVcard {...props}/>
        </>
    );
}
