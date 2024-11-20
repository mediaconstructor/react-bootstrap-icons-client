
"use client";
import React from "react";
import {IconProps, Calendar2Day} from "react-bootstrap-icons";

export const CI_Calendar2Day : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Day {...props}/>
        </>
    );
}
