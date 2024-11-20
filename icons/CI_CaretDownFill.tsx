
"use client";
import React from "react";
import {IconProps, CaretDownFill} from "react-bootstrap-icons";

export const CI_CaretDownFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretDownFill {...props}/>
        </>
    );
}
