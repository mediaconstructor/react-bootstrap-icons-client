
"use client";
import React from "react";
import {IconProps, Info} from "react-bootstrap-icons";

export const CI_Info : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Info {...props}/>
        </>
    );
}
