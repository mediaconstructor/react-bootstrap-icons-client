
"use client";
import React from "react";
import {IconProps, BadgeArFill} from "react-bootstrap-icons";

export const CI_BadgeArFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeArFill {...props}/>
        </>
    );
}
