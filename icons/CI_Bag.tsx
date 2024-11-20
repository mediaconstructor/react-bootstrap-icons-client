
"use client";
import React from "react";
import {IconProps, Bag} from "react-bootstrap-icons";

export const CI_Bag : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bag {...props}/>
        </>
    );
}
