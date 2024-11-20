
"use client";
import React from "react";
import {IconProps, Textarea} from "react-bootstrap-icons";

export const CI_Textarea : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Textarea {...props}/>
        </>
    );
}
