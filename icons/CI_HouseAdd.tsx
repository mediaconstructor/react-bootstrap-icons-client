
"use client";
import React from "react";
import {IconProps, HouseAdd} from "react-bootstrap-icons";

export const CI_HouseAdd : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HouseAdd {...props}/>
        </>
    );
}
