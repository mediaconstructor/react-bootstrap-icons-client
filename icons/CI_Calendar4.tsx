
"use client";
import React from "react";
import {IconProps, Calendar4} from "react-bootstrap-icons";

export const CI_Calendar4 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar4 {...props}/>
        </>
    );
}
