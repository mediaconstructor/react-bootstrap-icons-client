
"use client";
import React from "react";
import {IconProps, PersonDashFill} from "react-bootstrap-icons";

export const CI_PersonDashFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonDashFill {...props}/>
        </>
    );
}
