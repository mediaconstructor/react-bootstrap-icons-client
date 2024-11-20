
"use client";
import React from "react";
import {IconProps, PersonVideo} from "react-bootstrap-icons";

export const CI_PersonVideo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonVideo {...props}/>
        </>
    );
}
