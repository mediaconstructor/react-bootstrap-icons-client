
"use client";
import React from "react";
import {IconProps, CaretRight} from "react-bootstrap-icons";

export const CI_CaretRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretRight {...props}/>
        </>
    );
}
