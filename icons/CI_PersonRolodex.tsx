
"use client";
import React from "react";
import {IconProps, PersonRolodex} from "react-bootstrap-icons";

export const CI_PersonRolodex : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonRolodex {...props}/>
        </>
    );
}
