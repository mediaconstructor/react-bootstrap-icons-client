
"use client";
import React from "react";
import {IconProps, CalendarX} from "react-bootstrap-icons";

export const CI_CalendarX : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarX {...props}/>
        </>
    );
}
