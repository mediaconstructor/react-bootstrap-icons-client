
"use client";
import React from "react";
import {IconProps, CalendarHeart} from "react-bootstrap-icons";

export const CI_CalendarHeart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CalendarHeart {...props}/>
        </>
    );
}
