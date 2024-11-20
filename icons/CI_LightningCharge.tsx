
"use client";
import React from "react";
import {IconProps, LightningCharge} from "react-bootstrap-icons";

export const CI_LightningCharge : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LightningCharge {...props}/>
        </>
    );
}
