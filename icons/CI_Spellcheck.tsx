
"use client";
import React from "react";
import {IconProps, Spellcheck} from "react-bootstrap-icons";

export const CI_Spellcheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Spellcheck {...props}/>
        </>
    );
}
