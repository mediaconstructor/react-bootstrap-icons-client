
"use client";
import React from "react";
import {IconProps, Hash} from "react-bootstrap-icons";

export const CI_Hash : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Hash {...props}/>
        </>
    );
}
