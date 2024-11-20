
"use client";
import React from "react";
import {IconProps, DpadFill} from "react-bootstrap-icons";

export const CI_DpadFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <DpadFill {...props}/>
        </>
    );
}
