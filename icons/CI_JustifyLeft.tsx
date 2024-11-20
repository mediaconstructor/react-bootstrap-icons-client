
"use client";
import React from "react";
import {IconProps, JustifyLeft} from "react-bootstrap-icons";

export const CI_JustifyLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <JustifyLeft {...props}/>
        </>
    );
}
