
"use client";
import React from "react";
import {IconProps, Calendar2Event} from "react-bootstrap-icons";

export const CI_Calendar2Event : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Event {...props}/>
        </>
    );
}
