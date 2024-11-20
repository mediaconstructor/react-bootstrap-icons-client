
"use client";
import React from "react";
import {IconProps, Stars} from "react-bootstrap-icons";

export const CI_Stars : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Stars {...props}/>
        </>
    );
}
