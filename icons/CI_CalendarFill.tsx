
"use client";
import React from "react";
import {IconProps, CalendarFill} from "react-bootstrap-icons";

export const CI_CalendarFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarFill {...props}/>
        </>
    );
}
