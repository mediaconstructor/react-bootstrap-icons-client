
"use client";
import React from "react";
import {IconProps, CalendarDay} from "react-bootstrap-icons";

export const CI_CalendarDay : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarDay {...props}/>
        </>
    );
}
