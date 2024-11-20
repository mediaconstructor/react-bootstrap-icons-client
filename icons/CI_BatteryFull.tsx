
"use client";
import React from "react";
import {IconProps, BatteryFull} from "react-bootstrap-icons";

export const CI_BatteryFull : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BatteryFull {...props}/>
        </>
    );
}
