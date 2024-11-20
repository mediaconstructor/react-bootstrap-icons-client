
"use client";
import React from "react";
import {IconProps, Pause} from "react-bootstrap-icons";

export const CI_Pause : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Pause {...props}/>
        </>
    );
}
