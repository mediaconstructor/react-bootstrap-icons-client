
"use client";
import React from "react";
import {IconProps, Building} from "react-bootstrap-icons";

export const CI_Building : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Building {...props}/>
        </>
    );
}
