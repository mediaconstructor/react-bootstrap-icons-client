
"use client";
import React from "react";
import {IconProps, Telephone} from "react-bootstrap-icons";

export const CI_Telephone : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Telephone {...props}/>
        </>
    );
}
