
"use client";
import React from "react";
import {IconProps, Badge3d} from "react-bootstrap-icons";

export const CI_Badge3d : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Badge3d {...props}/>
        </>
    );
}
