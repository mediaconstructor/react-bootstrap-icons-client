
"use client";
import React from "react";
import {IconProps, PersonBadge} from "react-bootstrap-icons";

export const CI_PersonBadge : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PersonBadge {...props}/>
        </>
    );
}
