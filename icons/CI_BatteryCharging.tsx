
"use client";
import React from "react";
import {IconProps, BatteryCharging} from "react-bootstrap-icons";

export const CI_BatteryCharging : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BatteryCharging {...props}/>
        </>
    );
}
