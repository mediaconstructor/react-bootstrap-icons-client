
"use client";
import React from "react";
import {IconProps, Virus} from "react-bootstrap-icons";

export const CI_Virus : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Virus {...props}/>
        </>
    );
}
