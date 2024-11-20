
"use client";
import React from "react";
import {IconProps, MapFill} from "react-bootstrap-icons";

export const CI_MapFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <MapFill {...props}/>
        </>
    );
}
