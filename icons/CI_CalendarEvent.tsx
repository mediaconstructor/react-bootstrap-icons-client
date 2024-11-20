
"use client";
import React from "react";
import {IconProps, CalendarEvent} from "react-bootstrap-icons";

export const CI_CalendarEvent : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarEvent {...props}/>
        </>
    );
}
