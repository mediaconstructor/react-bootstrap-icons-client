
"use client";
import React from "react";
import {IconProps, Calendar2Heart} from "react-bootstrap-icons";

export const CI_Calendar2Heart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Heart {...props}/>
        </>
    );
}
