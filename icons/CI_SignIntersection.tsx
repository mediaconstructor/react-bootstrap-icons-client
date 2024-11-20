
"use client";
import React from "react";
import {IconProps, SignIntersection} from "react-bootstrap-icons";

export const CI_SignIntersection : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignIntersection {...props}/>
        </>
    );
}
