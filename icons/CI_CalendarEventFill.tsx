
"use client";
import React from "react";
import {IconProps, CalendarEventFill} from "react-bootstrap-icons";

export const CI_CalendarEventFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarEventFill {...props}/>
        </>
    );
}
