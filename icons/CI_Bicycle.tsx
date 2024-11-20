
"use client";
import React from "react";
import {IconProps, Bicycle} from "react-bootstrap-icons";

export const CI_Bicycle : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bicycle {...props}/>
        </>
    );
}
