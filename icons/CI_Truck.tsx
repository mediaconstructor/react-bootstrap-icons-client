
"use client";
import React from "react";
import {IconProps, Truck} from "react-bootstrap-icons";

export const CI_Truck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Truck {...props}/>
        </>
    );
}
