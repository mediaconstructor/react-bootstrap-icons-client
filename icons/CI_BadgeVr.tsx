
"use client";
import React from "react";
import {IconProps, BadgeVr} from "react-bootstrap-icons";

export const CI_BadgeVr : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeVr {...props}/>
        </>
    );
}
