
"use client";
import React from "react";
import {IconProps, HandbagFill} from "react-bootstrap-icons";

export const CI_HandbagFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HandbagFill {...props}/>
        </>
    );
}
