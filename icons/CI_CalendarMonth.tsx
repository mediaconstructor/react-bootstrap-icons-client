
"use client";
import React from "react";
import {IconProps, CalendarMonth} from "react-bootstrap-icons";

export const CI_CalendarMonth : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarMonth {...props}/>
        </>
    );
}
