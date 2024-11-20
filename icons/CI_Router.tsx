
"use client";
import React from "react";
import {IconProps, Router} from "react-bootstrap-icons";

export const CI_Router : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Router {...props}/>
        </>
    );
}
