
"use client";
import React from "react";
import {IconProps, Newspaper} from "react-bootstrap-icons";

export const CI_Newspaper : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Newspaper {...props}/>
        </>
    );
}
