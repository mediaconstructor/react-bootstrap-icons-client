
"use client";
import React from "react";
import {IconProps, CalendarDate} from "react-bootstrap-icons";

export const CI_CalendarDate : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarDate {...props}/>
        </>
    );
}
