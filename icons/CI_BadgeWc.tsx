
"use client";
import React from "react";
import {IconProps, BadgeWc} from "react-bootstrap-icons";

export const CI_BadgeWc : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeWc {...props}/>
        </>
    );
}
