
"use client";
import React from "react";
import {IconProps, Mouse} from "react-bootstrap-icons";

export const CI_Mouse : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <Mouse {...props}/>
        </>
    );
}
