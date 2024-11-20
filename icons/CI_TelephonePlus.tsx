
"use client";
import React from "react";
import {IconProps, TelephonePlus} from "react-bootstrap-icons";

export const CI_TelephonePlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TelephonePlus {...props}/>
        </>
    );
}
