
"use client";
import React from "react";
import {IconProps, BagFill} from "react-bootstrap-icons";

export const CI_BagFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BagFill {...props}/>
        </>
    );
}
