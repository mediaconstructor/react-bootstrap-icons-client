
"use client";
import React from "react";
import {IconProps, BorderLeft} from "react-bootstrap-icons";

export const CI_BorderLeft : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <BorderLeft {...props}/>
        </>
    );
}
