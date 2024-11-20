
"use client";
import React from "react";
import {IconProps, FuelPumpFill} from "react-bootstrap-icons";

export const CI_FuelPumpFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FuelPumpFill {...props}/>
        </>
    );
}
