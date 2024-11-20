
"use client";
import React from "react";
import {IconProps, Calendar3Week} from "react-bootstrap-icons";

export const CI_Calendar3Week : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar3Week {...props}/>
        </>
    );
}
