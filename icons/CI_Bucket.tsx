
"use client";
import React from "react";
import {IconProps, Bucket} from "react-bootstrap-icons";

export const CI_Bucket : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bucket {...props}/>
        </>
    );
}
