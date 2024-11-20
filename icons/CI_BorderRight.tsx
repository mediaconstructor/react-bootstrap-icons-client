
"use client";
import React from "react";
import {IconProps, BorderRight} from "react-bootstrap-icons";

export const CI_BorderRight : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderRight {...props}/>
        </>
    );
}
