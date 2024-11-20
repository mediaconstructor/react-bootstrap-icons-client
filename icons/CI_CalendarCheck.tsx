
"use client";
import React from "react";
import {IconProps, CalendarCheck} from "react-bootstrap-icons";

export const CI_CalendarCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarCheck {...props}/>
        </>
    );
}
