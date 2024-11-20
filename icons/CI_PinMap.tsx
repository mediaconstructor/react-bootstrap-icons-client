
"use client";
import React from "react";
import {IconProps, PinMap} from "react-bootstrap-icons";

export const CI_PinMap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PinMap {...props}/>
        </>
    );
}
