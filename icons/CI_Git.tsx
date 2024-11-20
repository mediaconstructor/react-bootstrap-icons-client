
"use client";
import React from "react";
import {IconProps, Git} from "react-bootstrap-icons";

export const CI_Git : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Git {...props}/>
        </>
    );
}
