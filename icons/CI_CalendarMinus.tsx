
"use client";
import React from "react";
import {IconProps, CalendarMinus} from "react-bootstrap-icons";

export const CI_CalendarMinus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarMinus {...props}/>
        </>
    );
}
