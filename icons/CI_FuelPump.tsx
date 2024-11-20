
"use client";
import React from "react";
import {IconProps, FuelPump} from "react-bootstrap-icons";

export const CI_FuelPump : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FuelPump {...props}/>
        </>
    );
}
