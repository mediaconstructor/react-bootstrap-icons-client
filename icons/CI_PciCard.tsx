
"use client";
import React from "react";
import {IconProps, PciCard} from "react-bootstrap-icons";

export const CI_PciCard : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PciCard {...props}/>
        </>
    );
}
