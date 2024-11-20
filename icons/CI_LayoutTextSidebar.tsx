
"use client";
import React from "react";
import {IconProps, LayoutTextSidebar} from "react-bootstrap-icons";

export const CI_LayoutTextSidebar : React.FC<IconProps> = ({...props}) => {
    return (
        <>
            <LayoutTextSidebar {...props}/>
        </>
    );
}
