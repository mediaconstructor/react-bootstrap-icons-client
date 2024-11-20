
"use client";
import React from "react";
import {IconProps, ShieldShaded} from "react-bootstrap-icons";

export const CI_ShieldShaded : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ShieldShaded {...props}/>
        </>
    );
}
