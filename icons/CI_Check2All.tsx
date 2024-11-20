
"use client";
import React from "react";
import {IconProps, Check2All} from "react-bootstrap-icons";

export const CI_Check2All : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Check2All {...props}/>
        </>
    );
}
