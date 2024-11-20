
"use client";
import React from "react";
import {IconProps, FuelPumpDiesel} from "react-bootstrap-icons";

export const CI_FuelPumpDiesel : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <FuelPumpDiesel {...props}/>
        </>
    );
}
