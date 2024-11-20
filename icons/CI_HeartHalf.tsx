
"use client";
import React from "react";
import {IconProps, HeartHalf} from "react-bootstrap-icons";

export const CI_HeartHalf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HeartHalf {...props}/>
        </>
    );
}
