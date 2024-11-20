
"use client";
import React from "react";
import {IconProps, CloudFill} from "react-bootstrap-icons";

export const CI_CloudFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudFill {...props}/>
        </>
    );
}
