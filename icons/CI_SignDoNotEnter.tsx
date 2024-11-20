
"use client";
import React from "react";
import {IconProps, SignDoNotEnter} from "react-bootstrap-icons";

export const CI_SignDoNotEnter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignDoNotEnter {...props}/>
        </>
    );
}
