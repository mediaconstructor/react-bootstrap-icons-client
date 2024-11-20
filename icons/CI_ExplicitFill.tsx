
"use client";
import React from "react";
import {IconProps, ExplicitFill} from "react-bootstrap-icons";

export const CI_ExplicitFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ExplicitFill {...props}/>
        </>
    );
}
