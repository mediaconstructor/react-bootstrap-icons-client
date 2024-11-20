
"use client";
import React from "react";
import {IconProps, SignIntersectionT} from "react-bootstrap-icons";

export const CI_SignIntersectionT : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignIntersectionT {...props}/>
        </>
    );
}
