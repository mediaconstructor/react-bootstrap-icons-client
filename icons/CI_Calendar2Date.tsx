
"use client";
import React from "react";
import {IconProps, Calendar2Date} from "react-bootstrap-icons";

export const CI_Calendar2Date : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Date {...props}/>
        </>
    );
}
