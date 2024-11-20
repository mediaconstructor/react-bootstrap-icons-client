
"use client";
import React from "react";
import {IconProps, PciCardSound} from "react-bootstrap-icons";

export const CI_PciCardSound : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PciCardSound {...props}/>
        </>
    );
}
