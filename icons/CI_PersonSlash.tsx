
"use client";
import React from "react";
import {IconProps, PersonSlash} from "react-bootstrap-icons";

export const CI_PersonSlash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonSlash {...props}/>
        </>
    );
}
