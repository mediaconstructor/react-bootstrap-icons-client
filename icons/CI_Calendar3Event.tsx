
"use client";
import React from "react";
import {IconProps, Calendar3Event} from "react-bootstrap-icons";

export const CI_Calendar3Event : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar3Event {...props}/>
        </>
    );
}
