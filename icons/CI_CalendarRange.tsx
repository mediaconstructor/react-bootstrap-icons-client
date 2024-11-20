
"use client";
import React from "react";
import {IconProps, CalendarRange} from "react-bootstrap-icons";

export const CI_CalendarRange : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarRange {...props}/>
        </>
    );
}
