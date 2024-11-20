
"use client";
import React from "react";
import {IconProps, Calendar2Minus} from "react-bootstrap-icons";

export const CI_Calendar2Minus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Minus {...props}/>
        </>
    );
}
