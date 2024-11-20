
"use client";
import React from "react";
import {IconProps, TruckFront} from "react-bootstrap-icons";

export const CI_TruckFront : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TruckFront {...props}/>
        </>
    );
}
