
"use client";
import React from "react";
import {IconProps, Crop} from "react-bootstrap-icons";

export const CI_Crop : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Crop {...props}/>
        </>
    );
}
