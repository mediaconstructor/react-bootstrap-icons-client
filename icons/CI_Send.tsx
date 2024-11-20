
"use client";
import React from "react";
import {IconProps, Send} from "react-bootstrap-icons";

export const CI_Send : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Send {...props}/>
        </>
    );
}
