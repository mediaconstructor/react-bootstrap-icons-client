
"use client";
import React from "react";
import {IconProps, BadgeVo} from "react-bootstrap-icons";

export const CI_BadgeVo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeVo {...props}/>
        </>
    );
}
