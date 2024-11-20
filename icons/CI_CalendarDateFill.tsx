
"use client";
import React from "react";
import {IconProps, CalendarDateFill} from "react-bootstrap-icons";

export const CI_CalendarDateFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarDateFill {...props}/>
        </>
    );
}
