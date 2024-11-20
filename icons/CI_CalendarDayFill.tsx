
"use client";
import React from "react";
import {IconProps, CalendarDayFill} from "react-bootstrap-icons";

export const CI_CalendarDayFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarDayFill {...props}/>
        </>
    );
}
