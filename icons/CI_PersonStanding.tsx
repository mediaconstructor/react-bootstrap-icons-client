
"use client";
import React from "react";
import {IconProps, PersonStanding} from "react-bootstrap-icons";

export const CI_PersonStanding : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonStanding {...props}/>
        </>
    );
}
