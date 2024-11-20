
"use client";
import React from "react";
import {IconProps, BarChart} from "react-bootstrap-icons";

export const CI_BarChart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BarChart {...props}/>
        </>
    );
}
