
"use client";
import React from "react";
import {IconProps, Discord} from "react-bootstrap-icons";

export const CI_Discord : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Discord {...props}/>
        </>
    );
}
