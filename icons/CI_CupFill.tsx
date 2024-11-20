
"use client";
import React from "react";
import {IconProps, CupFill} from "react-bootstrap-icons";

export const CI_CupFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CupFill {...props}/>
        </>
    );
}
