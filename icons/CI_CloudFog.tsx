
"use client";
import React from "react";
import {IconProps, CloudFog} from "react-bootstrap-icons";

export const CI_CloudFog : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudFog {...props}/>
        </>
    );
}
