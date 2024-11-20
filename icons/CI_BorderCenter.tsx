
"use client";
import React from "react";
import {IconProps, BorderCenter} from "react-bootstrap-icons";

export const CI_BorderCenter : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderCenter {...props}/>
        </>
    );
}
