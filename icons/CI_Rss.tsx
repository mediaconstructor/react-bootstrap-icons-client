
"use client";
import React from "react";
import {IconProps, Rss} from "react-bootstrap-icons";

export const CI_Rss : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Rss {...props}/>
        </>
    );
}
