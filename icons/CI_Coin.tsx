
"use client";
import React from "react";
import {IconProps, Coin} from "react-bootstrap-icons";

export const CI_Coin : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Coin {...props}/>
        </>
    );
}
