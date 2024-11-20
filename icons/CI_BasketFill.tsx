
"use client";
import React from "react";
import {IconProps, BasketFill} from "react-bootstrap-icons";

export const CI_BasketFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BasketFill {...props}/>
        </>
    );
}
