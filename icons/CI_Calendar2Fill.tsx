
"use client";
import React from "react";
import {IconProps, Calendar2Fill} from "react-bootstrap-icons";

export const CI_Calendar2Fill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Fill {...props}/>
        </>
    );
}
