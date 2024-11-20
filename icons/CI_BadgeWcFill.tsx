
"use client";
import React from "react";
import {IconProps, BadgeWcFill} from "react-bootstrap-icons";

export const CI_BadgeWcFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeWcFill {...props}/>
        </>
    );
}
