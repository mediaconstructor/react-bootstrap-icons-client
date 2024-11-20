
"use client";
import React from "react";
import {IconProps, BadgeAdFill} from "react-bootstrap-icons";

export const CI_BadgeAdFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeAdFill {...props}/>
        </>
    );
}
