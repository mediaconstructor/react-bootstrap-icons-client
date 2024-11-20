
"use client";
import React from "react";
import {IconProps, PersonFillDash} from "react-bootstrap-icons";

export const CI_PersonFillDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonFillDash {...props}/>
        </>
    );
}
