
"use client";
import React from "react";
import {IconProps, Valentine} from "react-bootstrap-icons";

export const CI_Valentine : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Valentine {...props}/>
        </>
    );
}
