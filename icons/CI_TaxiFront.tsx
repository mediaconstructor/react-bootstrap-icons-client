
"use client";
import React from "react";
import {IconProps, TaxiFront} from "react-bootstrap-icons";

export const CI_TaxiFront : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TaxiFront {...props}/>
        </>
    );
}
