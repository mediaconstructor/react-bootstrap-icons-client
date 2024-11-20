
"use client";
import React from "react";
import {IconProps, Calendar4Range} from "react-bootstrap-icons";

export const CI_Calendar4Range : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Calendar4Range {...props}/>
        </>
    );
}
