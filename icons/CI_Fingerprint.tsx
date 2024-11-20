
"use client";
import React from "react";
import {IconProps, Fingerprint} from "react-bootstrap-icons";

export const CI_Fingerprint : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Fingerprint {...props}/>
        </>
    );
}
