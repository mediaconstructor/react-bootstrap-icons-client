
"use client";
import React from "react";
import {IconProps, Calendar2} from "react-bootstrap-icons";

export const CI_Calendar2 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2 {...props}/>
        </>
    );
}
