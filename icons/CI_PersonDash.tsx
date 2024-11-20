
"use client";
import React from "react";
import {IconProps, PersonDash} from "react-bootstrap-icons";

export const CI_PersonDash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonDash {...props}/>
        </>
    );
}
