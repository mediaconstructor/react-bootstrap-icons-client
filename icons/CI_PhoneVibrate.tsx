
"use client";
import React from "react";
import {IconProps, PhoneVibrate} from "react-bootstrap-icons";

export const CI_PhoneVibrate : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PhoneVibrate {...props}/>
        </>
    );
}
