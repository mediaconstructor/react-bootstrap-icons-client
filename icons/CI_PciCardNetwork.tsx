
"use client";
import React from "react";
import {IconProps, PciCardNetwork} from "react-bootstrap-icons";

export const CI_PciCardNetwork : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PciCardNetwork {...props}/>
        </>
    );
}
