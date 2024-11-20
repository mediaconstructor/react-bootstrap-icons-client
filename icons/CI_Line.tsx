
"use client";
import React from "react";
import {IconProps, Line} from "react-bootstrap-icons";

export const CI_Line : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Line {...props}/>
        </>
    );
}
