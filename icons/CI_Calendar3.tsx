
"use client";
import React from "react";
import {IconProps, Calendar3} from "react-bootstrap-icons";

export const CI_Calendar3 : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar3 {...props}/>
        </>
    );
}
