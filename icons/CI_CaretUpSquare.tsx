
"use client";
import React from "react";
import {IconProps, CaretUpSquare} from "react-bootstrap-icons";

export const CI_CaretUpSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretUpSquare {...props}/>
        </>
    );
}
