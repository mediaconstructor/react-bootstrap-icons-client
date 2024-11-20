
"use client";
import React from "react";
import {IconProps, CaretLeftSquare} from "react-bootstrap-icons";

export const CI_CaretLeftSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretLeftSquare {...props}/>
        </>
    );
}
