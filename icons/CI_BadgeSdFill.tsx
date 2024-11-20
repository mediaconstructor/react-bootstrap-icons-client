
"use client";
import React from "react";
import {IconProps, BadgeSdFill} from "react-bootstrap-icons";

export const CI_BadgeSdFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeSdFill {...props}/>
        </>
    );
}
