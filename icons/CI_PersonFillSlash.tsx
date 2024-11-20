
"use client";
import React from "react";
import {IconProps, PersonFillSlash} from "react-bootstrap-icons";

export const CI_PersonFillSlash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillSlash {...props}/>
        </>
    );
}
