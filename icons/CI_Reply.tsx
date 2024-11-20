
"use client";
import React from "react";
import {IconProps, Reply} from "react-bootstrap-icons";

export const CI_Reply : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Reply {...props}/>
        </>
    );
}
