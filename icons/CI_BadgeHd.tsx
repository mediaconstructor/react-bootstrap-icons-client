
"use client";
import React from "react";
import {IconProps, BadgeHd} from "react-bootstrap-icons";

export const CI_BadgeHd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeHd {...props}/>
        </>
    );
}
