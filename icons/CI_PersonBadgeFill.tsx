
"use client";
import React from "react";
import {IconProps, PersonBadgeFill} from "react-bootstrap-icons";

export const CI_PersonBadgeFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonBadgeFill {...props}/>
        </>
    );
}
