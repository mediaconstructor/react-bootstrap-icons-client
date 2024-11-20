
"use client";
import React from "react";
import {IconProps, Capsule} from "react-bootstrap-icons";

export const CI_Capsule : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Capsule {...props}/>
        </>
    );
}
