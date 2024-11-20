
"use client";
import React from "react";
import {IconProps, PhoneFlip} from "react-bootstrap-icons";

export const CI_PhoneFlip : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PhoneFlip {...props}/>
        </>
    );
}
