
"use client";
import React from "react";
import {IconProps, BatteryHalf} from "react-bootstrap-icons";

export const CI_BatteryHalf : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BatteryHalf {...props}/>
        </>
    );
}
