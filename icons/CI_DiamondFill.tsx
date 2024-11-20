
"use client";
import React from "react";
import {IconProps, DiamondFill} from "react-bootstrap-icons";

export const CI_DiamondFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DiamondFill {...props}/>
        </>
    );
}
