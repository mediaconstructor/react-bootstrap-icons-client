
"use client";
import React from "react";
import {IconProps, PieChartFill} from "react-bootstrap-icons";

export const CI_PieChartFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <PieChartFill {...props}/>
        </>
    );
}
