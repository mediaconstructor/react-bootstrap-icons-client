
"use client";
import React from "react";
import {IconProps, Ladder} from "react-bootstrap-icons";

export const CI_Ladder : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Ladder {...props}/>
        </>
    );
}
