
"use client";
import React from "react";
import {IconProps, CalendarPlus} from "react-bootstrap-icons";

export const CI_CalendarPlus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarPlus {...props}/>
        </>
    );
}
