
"use client";
import React from "react";
import {IconProps, BadgeHdFill} from "react-bootstrap-icons";

export const CI_BadgeHdFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeHdFill {...props}/>
        </>
    );
}
