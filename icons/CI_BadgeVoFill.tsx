
"use client";
import React from "react";
import {IconProps, BadgeVoFill} from "react-bootstrap-icons";

export const CI_BadgeVoFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeVoFill {...props}/>
        </>
    );
}
