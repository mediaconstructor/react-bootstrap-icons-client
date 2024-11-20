
"use client";
import React from "react";
import {IconProps, Gift} from "react-bootstrap-icons";

export const CI_Gift : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Gift {...props}/>
        </>
    );
}
