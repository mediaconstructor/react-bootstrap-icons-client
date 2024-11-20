
"use client";
import React from "react";
import {IconProps, Badge3dFill} from "react-bootstrap-icons";

export const CI_Badge3dFill : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Badge3dFill {...props}/>
        </>
    );
}
