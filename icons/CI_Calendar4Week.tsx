
"use client";
import React from "react";
import {IconProps, Calendar4Week} from "react-bootstrap-icons";

export const CI_Calendar4Week : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar4Week {...props}/>
        </>
    );
}
