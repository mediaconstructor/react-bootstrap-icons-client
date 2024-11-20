
"use client";
import React from "react";
import {IconProps, AlignCenter} from "react-bootstrap-icons";

export const CI_AlignCenter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <AlignCenter {...props}/>
        </>
    );
}
