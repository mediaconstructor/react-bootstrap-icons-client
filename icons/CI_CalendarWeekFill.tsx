
"use client";
import React from "react";
import {IconProps, CalendarWeekFill} from "react-bootstrap-icons";

export const CI_CalendarWeekFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarWeekFill {...props}/>
        </>
    );
}
