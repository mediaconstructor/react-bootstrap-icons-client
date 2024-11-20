
"use client";
import React from "react";
import {IconProps, CarFront} from "react-bootstrap-icons";

export const CI_CarFront : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CarFront {...props}/>
        </>
    );
}
