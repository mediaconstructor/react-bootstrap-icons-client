
"use client";
import React from "react";
import {IconProps, CalendarPlusFill} from "react-bootstrap-icons";

export const CI_CalendarPlusFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarPlusFill {...props}/>
        </>
    );
}
