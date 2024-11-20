
"use client";
import React from "react";
import {IconProps, AspectRatio} from "react-bootstrap-icons";

export const CI_AspectRatio : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AspectRatio {...props}/>
        </>
    );
}
