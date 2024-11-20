
"use client";
import React from "react";
import {IconProps, LayoutTextWindow} from "react-bootstrap-icons";

export const CI_LayoutTextWindow : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutTextWindow {...props}/>
        </>
    );
}
