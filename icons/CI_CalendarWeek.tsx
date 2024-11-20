
"use client";
import React from "react";
import {IconProps, CalendarWeek} from "react-bootstrap-icons";

export const CI_CalendarWeek : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarWeek {...props}/>
        </>
    );
}
