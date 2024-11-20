
"use client";
import React from "react";
import {IconProps, SuitSpade} from "react-bootstrap-icons";

export const CI_SuitSpade : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <SuitSpade {...props}/>
        </>
    );
}
