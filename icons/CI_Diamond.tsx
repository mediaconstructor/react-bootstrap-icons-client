
"use client";
import React from "react";
import {IconProps, Diamond} from "react-bootstrap-icons";

export const CI_Diamond : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Diamond {...props}/>
        </>
    );
}
