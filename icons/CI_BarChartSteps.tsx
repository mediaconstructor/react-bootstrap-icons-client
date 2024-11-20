
"use client";
import React from "react";
import {IconProps, BarChartSteps} from "react-bootstrap-icons";

export const CI_BarChartSteps : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BarChartSteps {...props}/>
        </>
    );
}
