
"use client";
import React from "react";
import {IconProps, Calendar2Plus} from "react-bootstrap-icons";

export const CI_Calendar2Plus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Plus {...props}/>
        </>
    );
}
