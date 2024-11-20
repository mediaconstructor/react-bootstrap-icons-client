
"use client";
import React from "react";
import {IconProps, Hospital} from "react-bootstrap-icons";

export const CI_Hospital : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Hospital {...props}/>
        </>
    );
}
