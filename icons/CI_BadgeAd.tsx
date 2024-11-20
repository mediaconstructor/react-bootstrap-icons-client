
"use client";
import React from "react";
import {IconProps, BadgeAd} from "react-bootstrap-icons";

export const CI_BadgeAd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeAd {...props}/>
        </>
    );
}
