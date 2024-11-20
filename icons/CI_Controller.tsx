
"use client";
import React from "react";
import {IconProps, Controller} from "react-bootstrap-icons";

export const CI_Controller : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Controller {...props}/>
        </>
    );
}
