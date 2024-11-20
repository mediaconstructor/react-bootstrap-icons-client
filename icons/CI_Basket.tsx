
"use client";
import React from "react";
import {IconProps, Basket} from "react-bootstrap-icons";

export const CI_Basket : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Basket {...props}/>
        </>
    );
}
