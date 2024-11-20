
"use client";
import React from "react";
import {IconProps, ShieldLock} from "react-bootstrap-icons";

export const CI_ShieldLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldLock {...props}/>
        </>
    );
}
