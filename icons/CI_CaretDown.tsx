
"use client";
import React from "react";
import {IconProps, CaretDown} from "react-bootstrap-icons";

export const CI_CaretDown : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretDown {...props}/>
        </>
    );
}
