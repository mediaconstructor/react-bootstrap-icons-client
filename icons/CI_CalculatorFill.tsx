
"use client";
import React from "react";
import {IconProps, CalculatorFill} from "react-bootstrap-icons";

export const CI_CalculatorFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalculatorFill {...props}/>
        </>
    );
}
