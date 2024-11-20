
"use client";
import React from "react";
import {IconProps, Hammer} from "react-bootstrap-icons";

export const CI_Hammer : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Hammer {...props}/>
        </>
    );
}
