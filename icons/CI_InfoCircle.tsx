
"use client";
import React from "react";
import {IconProps, InfoCircle} from "react-bootstrap-icons";

export const CI_InfoCircle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <InfoCircle {...props}/>
        </>
    );
}
