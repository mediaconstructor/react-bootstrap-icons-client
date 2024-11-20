
"use client";
import React from "react";
import {IconProps, Balloon} from "react-bootstrap-icons";

export const CI_Balloon : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Balloon {...props}/>
        </>
    );
}
