
"use client";
import React from "react";
import {IconProps, Mask} from "react-bootstrap-icons";

export const CI_Mask : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Mask {...props}/>
        </>
    );
}
