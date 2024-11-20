
"use client";
import React from "react";
import {IconProps, BadgeVrFill} from "react-bootstrap-icons";

export const CI_BadgeVrFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeVrFill {...props}/>
        </>
    );
}
