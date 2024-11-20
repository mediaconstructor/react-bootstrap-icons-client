
"use client";
import React from "react";
import {IconProps, Clock} from "react-bootstrap-icons";

export const CI_Clock : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Clock {...props}/>
        </>
    );
}
