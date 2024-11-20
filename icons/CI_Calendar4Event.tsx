
"use client";
import React from "react";
import {IconProps, Calendar4Event} from "react-bootstrap-icons";

export const CI_Calendar4Event : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar4Event {...props}/>
        </>
    );
}
