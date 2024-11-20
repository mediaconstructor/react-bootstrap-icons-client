
"use client";
import React from "react";
import {IconProps, HouseLock} from "react-bootstrap-icons";

export const CI_HouseLock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseLock {...props}/>
        </>
    );
}
