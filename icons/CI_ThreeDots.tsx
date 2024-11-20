
"use client";
import React from "react";
import {IconProps, ThreeDots} from "react-bootstrap-icons";

export const CI_ThreeDots : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ThreeDots {...props}/>
        </>
    );
}
