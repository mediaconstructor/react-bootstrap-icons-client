
"use client";
import React from "react";
import {IconProps, SinaWeibo} from "react-bootstrap-icons";

export const CI_SinaWeibo : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SinaWeibo {...props}/>
        </>
    );
}
