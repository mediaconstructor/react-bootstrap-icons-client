
"use client";
import React from "react";
import {IconProps, SignpostSplit} from "react-bootstrap-icons";

export const CI_SignpostSplit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SignpostSplit {...props}/>
        </>
    );
}
