
"use client";
import React from "react";
import {IconProps, HouseDoor} from "react-bootstrap-icons";

export const CI_HouseDoor : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseDoor {...props}/>
        </>
    );
}
