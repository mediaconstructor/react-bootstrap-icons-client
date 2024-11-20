
"use client";
import React from "react";
import {IconProps, InfoSquare} from "react-bootstrap-icons";

export const CI_InfoSquare : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <InfoSquare {...props}/>
        </>
    );
}
