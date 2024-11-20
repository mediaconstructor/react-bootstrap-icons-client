
"use client";
import React from "react";
import {IconProps, Wind} from "react-bootstrap-icons";

export const CI_Wind : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wind {...props}/>
        </>
    );
}
