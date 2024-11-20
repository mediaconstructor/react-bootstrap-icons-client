
"use client";
import React from "react";
import {IconProps, BadgeAr} from "react-bootstrap-icons";

export const CI_BadgeAr : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeAr {...props}/>
        </>
    );
}
