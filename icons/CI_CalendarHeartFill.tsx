
"use client";
import React from "react";
import {IconProps, CalendarHeartFill} from "react-bootstrap-icons";

export const CI_CalendarHeartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarHeartFill {...props}/>
        </>
    );
}
