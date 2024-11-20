
"use client";
import React from "react";
import {IconProps, PinFill} from "react-bootstrap-icons";

export const CI_PinFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PinFill {...props}/>
        </>
    );
}
