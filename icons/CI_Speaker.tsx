
"use client";
import React from "react";
import {IconProps, Speaker} from "react-bootstrap-icons";

export const CI_Speaker : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Speaker {...props}/>
        </>
    );
}
