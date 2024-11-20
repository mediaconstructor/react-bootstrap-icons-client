
"use client";
import React from "react";
import {IconProps, Calendar3Range} from "react-bootstrap-icons";

export const CI_Calendar3Range : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar3Range {...props}/>
        </>
    );
}
