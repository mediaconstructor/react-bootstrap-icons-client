
"use client";
import React from "react";
import {IconProps, Shop} from "react-bootstrap-icons";

export const CI_Shop : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Shop {...props}/>
        </>
    );
}
