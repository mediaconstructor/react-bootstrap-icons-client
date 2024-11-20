
"use client";
import React from "react";
import {IconProps, Bootstrap} from "react-bootstrap-icons";

export const CI_Bootstrap : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Bootstrap {...props}/>
        </>
    );
}
