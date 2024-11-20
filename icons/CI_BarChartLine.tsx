
"use client";
import React from "react";
import {IconProps, BarChartLine} from "react-bootstrap-icons";

export const CI_BarChartLine : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BarChartLine {...props}/>
        </>
    );
}
