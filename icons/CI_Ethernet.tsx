
"use client";
import React from "react";
import {IconProps, Ethernet} from "react-bootstrap-icons";

export const CI_Ethernet : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Ethernet {...props}/>
        </>
    );
}
