
"use client";
import React from "react";
import {IconProps, Cup} from "react-bootstrap-icons";

export const CI_Cup : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Cup {...props}/>
        </>
    );
}
