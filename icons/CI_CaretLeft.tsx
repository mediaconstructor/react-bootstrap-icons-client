
"use client";
import React from "react";
import {IconProps, CaretLeft} from "react-bootstrap-icons";

export const CI_CaretLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CaretLeft {...props}/>
        </>
    );
}
