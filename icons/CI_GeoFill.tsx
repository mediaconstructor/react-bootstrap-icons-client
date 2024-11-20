
"use client";
import React from "react";
import {IconProps, GeoFill} from "react-bootstrap-icons";

export const CI_GeoFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GeoFill {...props}/>
        </>
    );
}
