
"use client";
import React from "react";
import {IconProps, Compass} from "react-bootstrap-icons";

export const CI_Compass : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Compass {...props}/>
        </>
    );
}
