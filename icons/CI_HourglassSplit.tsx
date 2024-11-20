
"use client";
import React from "react";
import {IconProps, HourglassSplit} from "react-bootstrap-icons";

export const CI_HourglassSplit : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <HourglassSplit {...props}/>
        </>
    );
}
