
"use client";
import React from "react";
import {IconProps, PersonHearts} from "react-bootstrap-icons";

export const CI_PersonHearts : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonHearts {...props}/>
        </>
    );
}
