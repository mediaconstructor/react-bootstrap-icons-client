
"use client";
import React from "react";
import {IconProps, MoonStars} from "react-bootstrap-icons";

export const CI_MoonStars : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MoonStars {...props}/>
        </>
    );
}
