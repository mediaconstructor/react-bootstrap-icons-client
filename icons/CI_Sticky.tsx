
"use client";
import React from "react";
import {IconProps, Sticky} from "react-bootstrap-icons";

export const CI_Sticky : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Sticky {...props}/>
        </>
    );
}
