
"use client";
import React from "react";
import {IconProps, GooglePlay} from "react-bootstrap-icons";

export const CI_GooglePlay : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GooglePlay {...props}/>
        </>
    );
}
