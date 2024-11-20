
"use client";
import React from "react";
import {IconProps, Journal} from "react-bootstrap-icons";

export const CI_Journal : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Journal {...props}/>
        </>
    );
}
