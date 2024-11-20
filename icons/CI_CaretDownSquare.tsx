
"use client";
import React from "react";
import {IconProps, CaretDownSquare} from "react-bootstrap-icons";

export const CI_CaretDownSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretDownSquare {...props}/>
        </>
    );
}
