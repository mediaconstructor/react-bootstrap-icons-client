
"use client";
import React from "react";
import {IconProps, EaselFill} from "react-bootstrap-icons";

export const CI_EaselFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <EaselFill {...props}/>
        </>
    );
}
