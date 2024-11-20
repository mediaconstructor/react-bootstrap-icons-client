
"use client";
import React from "react";
import {IconProps, PersonPlus} from "react-bootstrap-icons";

export const CI_PersonPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonPlus {...props}/>
        </>
    );
}
