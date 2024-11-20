
"use client";
import React from "react";
import {IconProps, Calendar2X} from "react-bootstrap-icons";

export const CI_Calendar2X : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2X {...props}/>
        </>
    );
}
