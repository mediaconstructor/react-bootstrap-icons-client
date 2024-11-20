
"use client";
import React from "react";
import {IconProps, PieChart} from "react-bootstrap-icons";

export const CI_PieChart : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PieChart {...props}/>
        </>
    );
}
