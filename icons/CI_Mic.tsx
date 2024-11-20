
"use client";
import React from "react";
import {IconProps, Mic} from "react-bootstrap-icons";

export const CI_Mic : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Mic {...props}/>
        </>
    );
}
