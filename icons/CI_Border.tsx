
"use client";
import React from "react";
import {IconProps, Border} from "react-bootstrap-icons";

export const CI_Border : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Border {...props}/>
        </>
    );
}
