
"use client";
import React from "react";
import {IconProps, BadgeCc} from "react-bootstrap-icons";

export const CI_BadgeCc : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BadgeCc {...props}/>
        </>
    );
}
