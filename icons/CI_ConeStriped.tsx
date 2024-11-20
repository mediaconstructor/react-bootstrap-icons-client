
"use client";
import React from "react";
import {IconProps, ConeStriped} from "react-bootstrap-icons";

export const CI_ConeStriped : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ConeStriped {...props}/>
        </>
    );
}
