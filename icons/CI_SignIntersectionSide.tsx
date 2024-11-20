
"use client";
import React from "react";
import {IconProps, SignIntersectionSide} from "react-bootstrap-icons";

export const CI_SignIntersectionSide : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignIntersectionSide {...props}/>
        </>
    );
}
