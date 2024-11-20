
"use client";
import React from "react";
import {IconProps, PinMapFill} from "react-bootstrap-icons";

export const CI_PinMapFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PinMapFill {...props}/>
        </>
    );
}
