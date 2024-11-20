
"use client";
import React from "react";
import {IconProps, ImageAlt} from "react-bootstrap-icons";

export const CI_ImageAlt : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <ImageAlt {...props}/>
        </>
    );
}
