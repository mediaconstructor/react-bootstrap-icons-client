
"use client";
import React from "react";
import {IconProps, GeoAltFill} from "react-bootstrap-icons";

export const CI_GeoAltFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GeoAltFill {...props}/>
        </>
    );
}
