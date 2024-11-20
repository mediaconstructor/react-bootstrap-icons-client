
"use client";
import React from "react";
import {IconProps, CalendarMonthFill} from "react-bootstrap-icons";

export const CI_CalendarMonthFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarMonthFill {...props}/>
        </>
    );
}
