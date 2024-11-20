
"use client";
import React from "react";
import {IconProps, TextLeft} from "react-bootstrap-icons";

export const CI_TextLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <TextLeft {...props}/>
        </>
    );
}
