
"use client";
import React from "react";
import {IconProps, Map} from "react-bootstrap-icons";

export const CI_Map : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Map {...props}/>
        </>
    );
}
