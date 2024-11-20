
"use client";
import React from "react";
import {IconProps, Calendar} from "react-bootstrap-icons";

export const CI_Calendar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar {...props}/>
        </>
    );
}
