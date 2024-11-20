
"use client";
import React from "react";
import {IconProps, Calendar2Check} from "react-bootstrap-icons";

export const CI_Calendar2Check : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Check {...props}/>
        </>
    );
}
