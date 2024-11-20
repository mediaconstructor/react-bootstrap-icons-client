
"use client";
import React from "react";
import {IconProps, ShopWindow} from "react-bootstrap-icons";

export const CI_ShopWindow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShopWindow {...props}/>
        </>
    );
}
