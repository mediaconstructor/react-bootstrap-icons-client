
"use client";
import React from "react";
import {IconProps, Flag} from "react-bootstrap-icons";

export const CI_Flag : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Flag {...props}/>
        </>
    );
}
