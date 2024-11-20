
"use client";
import React from "react";
import {IconProps, Wikipedia} from "react-bootstrap-icons";

export const CI_Wikipedia : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Wikipedia {...props}/>
        </>
    );
}
