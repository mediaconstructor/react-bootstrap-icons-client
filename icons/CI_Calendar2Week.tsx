
"use client";
import React from "react";
import {IconProps, Calendar2Week} from "react-bootstrap-icons";

export const CI_Calendar2Week : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar2Week {...props}/>
        </>
    );
}
