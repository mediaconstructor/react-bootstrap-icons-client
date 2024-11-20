
"use client";
import React from "react";
import {IconProps, Back} from "react-bootstrap-icons";

export const CI_Back : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Back {...props}/>
        </>
    );
}
