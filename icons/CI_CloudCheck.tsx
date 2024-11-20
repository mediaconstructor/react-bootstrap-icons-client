
"use client";
import React from "react";
import {IconProps, CloudCheck} from "react-bootstrap-icons";

export const CI_CloudCheck : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <CloudCheck {...props}/>
        </>
    );
}
