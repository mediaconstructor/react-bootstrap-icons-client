
"use client";
import React from "react";
import {IconProps, Receipt} from "react-bootstrap-icons";

export const CI_Receipt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Receipt {...props}/>
        </>
    );
}
