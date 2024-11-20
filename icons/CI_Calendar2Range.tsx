
"use client";
import React from "react";
import {IconProps, Calendar2Range} from "react-bootstrap-icons";

export const CI_Calendar2Range : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Range {...props}/>
        </>
    );
}
