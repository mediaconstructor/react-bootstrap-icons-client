
"use client";
import React from "react";
import {IconProps, GeoAlt} from "react-bootstrap-icons";

export const CI_GeoAlt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <GeoAlt {...props}/>
        </>
    );
}
