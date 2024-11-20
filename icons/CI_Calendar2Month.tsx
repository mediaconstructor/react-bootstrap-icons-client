
"use client";
import React from "react";
import {IconProps, Calendar2Month} from "react-bootstrap-icons";

export const CI_Calendar2Month : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Month {...props}/>
        </>
    );
}
