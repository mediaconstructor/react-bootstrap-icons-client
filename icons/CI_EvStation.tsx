
"use client";
import React from "react";
import {IconProps, EvStation} from "react-bootstrap-icons";

export const CI_EvStation : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EvStation {...props}/>
        </>
    );
}
