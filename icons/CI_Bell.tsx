
"use client";
import React from "react";
import {IconProps, Bell} from "react-bootstrap-icons";

export const CI_Bell : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bell {...props}/>
        </>
    );
}
